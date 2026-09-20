import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/secz02b6f.css';
import '../../css/f/fv08zpbdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="secz02b6f"/><path class="fv08zpbdj"/></g>`,
		"fallback": "tabler:photo-search",
	});
}

export default Component;
