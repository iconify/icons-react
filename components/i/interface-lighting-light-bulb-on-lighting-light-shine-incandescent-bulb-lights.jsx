import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g2znbebve.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g2znbebve"/>`,
		"fallback": "streamline:interface-lighting-light-bulb-on-lighting-light-shine-incandescent-bulb-lights",
	});
}

export default Component;
