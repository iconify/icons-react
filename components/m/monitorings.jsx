import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyz6619jm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xyz6619jm"/>`,
		"fallback": "ix:monitorings",
	});
}

export default Component;
