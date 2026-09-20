import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lkm9t2bni.css';
import '../../css/r/rzk0jubzq.css';
import '../../css/u/ugibliw5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lkm9t2bni"/><path class="rzk0jubzq"/><path class="ugibliw5d"/></g>`,
		"fallback": "tabler:plant-2-off",
	});
}

export default Component;
