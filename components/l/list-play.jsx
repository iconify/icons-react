import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hx5fpk80w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hx5fpk80w"/>`,
		"fallback": "noviair-light:list-play",
	});
}

export default Component;
