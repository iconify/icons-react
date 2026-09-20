import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cx1u4xboq.css';
import '../../css/z/zq1uys-iu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cx1u4xboq"/><path class="zq1uys-iu"/></g>`,
		"fallback": "streamline-flex-color:reduced-inequalities",
	});
}

export default Component;
