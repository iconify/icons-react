import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qz6biv3fi.css';
import '../../css/e/es0bdj_6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qz6biv3fi"/><path class="es0bdj_6m"/></g>`,
		"fallback": "tdesign:mathematics",
	});
}

export default Component;
