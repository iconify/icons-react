import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ps0o97bka.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ps0o97bka"/>`,
		"fallback": "dinkie-icons:tiktok",
	});
}

export default Component;
