import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7dgq0lve.css';
import '../../css/g/gtgj9y1zs.css';
import '../../css/c/cx6a31baz.css';
import '../../css/v/vf6j0qb9k.css';
import '../../css/x/xi4vmeboe.css';
import '../../css/p/p8nawjtnh.css';
import '../../css/m/m-3vj6b8x.css';
import '../../css/k/kxmnjfbkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y7dgq0lve"/><path class="gtgj9y1zs"/><path class="cx6a31baz"/><path class="vf6j0qb9k"/><path class="xi4vmeboe"/><path class="p8nawjtnh"/><path class="m-3vj6b8x"/><path class="kxmnjfbkl"/>`,
		"fallback": "token:shiden",
	});
}

export default Component;
