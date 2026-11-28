import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g4-hy2nls.css';
import '../../css/u/ufvvsjbzs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g4-hy2nls secondary"/><path class="primary ufvvsjbzs"/></g>`,
		"fallback": "iconaut:tractor-duotone",
	});
}

export default Component;
