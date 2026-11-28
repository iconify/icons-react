import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/i3nt_5b5j.css';
import '../../css/c/c5gfowu_b.css';
import '../../css/m/mgsxq4bxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="i3nt_5b5j"/><path class="c5gfowu_b"/><path class="mgsxq4bxt"/></g>`,
		"fallback": "iconaut:users",
	});
}

export default Component;
