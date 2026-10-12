import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qbw5k0b5p.css';
import '../../css/g/g8ugtkb8k.css';
import '../../css/x/xb47ufbha.css';
import '../../css/u/uperkmc6m.css';
import '../../css/a/a4qkyxbiy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="qbw5k0b5p"/><circle class="g8ugtkb8k"/><circle class="xb47ufbha"/><circle class="uperkmc6m"/><path class="a4qkyxbiy"/></g>`,
		"fallback": "andrsrxn:orbit",
	});
}

export default Component;
