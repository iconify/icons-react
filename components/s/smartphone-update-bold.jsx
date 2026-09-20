import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tx8lkac0y.css';
import '../../css/u/u4nu55g7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="tx8lkac0y"/><path class="u4nu55g7z"/></g>`,
		"fallback": "solar:smartphone-update-bold",
	});
}

export default Component;
