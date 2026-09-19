import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/roy_pgb6m.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="roy_pgb6m"/>`,
		"fallback": "dinkie-icons:orchid-mahjong",
	});
}

export default Component;
