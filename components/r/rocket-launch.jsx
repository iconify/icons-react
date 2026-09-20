import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qewhz66vl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qewhz66vl"/>`,
		"fallback": "mdi:rocket-launch",
	});
}

export default Component;
