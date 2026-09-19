import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzimpzqgf.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzimpzqgf"/>`,
		"fallback": "dinkie-icons:nine-of-bamboos-mahjong",
	});
}

export default Component;
