import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9o1kzb8g.css';
import '../../css/z/zeyokwb1m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h9o1kzb8g"/><path class="zeyokwb1m"/>`,
		"fallback": "streamline-pixel:interface-essential-profile-female",
	});
}

export default Component;
