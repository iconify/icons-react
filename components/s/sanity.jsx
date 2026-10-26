import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivbs_oy6v.css';
import '../../css/g/ghclb9bto.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ivbs_oy6v"/><path class="ghclb9bto"/>`,
		"fallback": "devicon:sanity",
	});
}

export default Component;
