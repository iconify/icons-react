import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/np8-hccbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="np8-hccbx"/>`,
		"fallback": "mdi:vector-square-plus",
	});
}

export default Component;
