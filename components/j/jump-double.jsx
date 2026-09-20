import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p07tmccvv.css';
import '../../css/m/mvxmopqep.css';
import '../../css/d/dz_6-qbgv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="p07tmccvv"><path class="mvxmopqep"/><path class="dz_6-qbgv"/></g>`,
		"fallback": "tdesign:jump-double",
	});
}

export default Component;
