import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oy0qn0pwp.css';
import '../../css/x/x-ccekbpz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="oy0qn0pwp"/><path class="x-ccekbpz"/></g>`,
		"fallback": "tabler:wash-press",
	});
}

export default Component;
