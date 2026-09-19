import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e254vp8do.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e254vp8do"/>`,
		"fallback": "dinkie-icons:six-of-bamboos-mahjong",
	});
}

export default Component;
