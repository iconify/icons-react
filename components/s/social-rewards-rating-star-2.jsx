import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gilwy0bbh.css';
import '../../css/m/m0qgp2bmk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gilwy0bbh"/><path class="m0qgp2bmk"/>`,
		"fallback": "streamline-pixel:social-rewards-rating-star-2",
	});
}

export default Component;
