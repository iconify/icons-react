import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mplgb07ei.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mplgb07ei"/>`,
		"fallback": "dinkie-icons:line-gap",
	});
}

export default Component;
