import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ftg0kf3yu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ftg0kf3yu"/>`,
		"fallback": "griddy-icons:volume-max",
	});
}

export default Component;
