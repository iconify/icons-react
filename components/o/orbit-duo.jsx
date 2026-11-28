import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gj4s0q_ul.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/n8vpwlbbm.css';
import '../../css/q/q7y-vobgy.css';
import '../../css/g/gveaibcqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gj4s0q_ul secondary"/><g class="dt0cm9dhy primary"><circle class="n8vpwlbbm"/><path class="q7y-vobgy"/><circle class="gveaibcqj"/></g>`,
		"fallback": "iconaut:orbit-duo",
	});
}

export default Component;
