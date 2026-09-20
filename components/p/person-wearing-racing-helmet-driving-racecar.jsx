import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qq14dwolm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qq14dwolm"/>`,
		"fallback": "pinhead:person-wearing-racing-helmet-driving-racecar",
	});
}

export default Component;
