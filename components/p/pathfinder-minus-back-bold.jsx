import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-6dujoie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c-6dujoie"/>`,
		"fallback": "streamline-ultimate:pathfinder-minus-back-bold",
	});
}

export default Component;
