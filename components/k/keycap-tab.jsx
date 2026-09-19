import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m360l3zaz.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m360l3zaz"/>`,
		"fallback": "dinkie-icons:keycap-tab",
	});
}

export default Component;
