import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hctj1nb7c.css';
import '../../css/q/qxaqxeblh.css';
import '../../css/m/mjuiasbra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hctj1nb7c"/><path class="qxaqxeblh"/><path class="mjuiasbra"/></g>`,
		"fallback": "hugeicons:package-plus",
	});
}

export default Component;
