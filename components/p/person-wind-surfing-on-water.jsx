import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtuihc3of.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wtuihc3of"/>`,
		"fallback": "pinhead:person-wind-surfing-on-water",
	});
}

export default Component;
