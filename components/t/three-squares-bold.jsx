import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u--1m-bou.css';
import '../../css/v/vidg63bsd.css';
import '../../css/p/pocrugbev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u--1m-bou"/><path class="vidg63bsd"/><path class="pocrugbev"/>`,
		"fallback": "solar:three-squares-bold",
	});
}

export default Component;
