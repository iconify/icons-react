import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/djmx-ybly.css';
import '../../css/l/lussumstn.css';
import '../../css/y/yrsmw3jhw.css';
import '../../css/t/tgej6jbmt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="djmx-ybly"/><path class="lussumstn"/><path class="yrsmw3jhw"/><path class="tgej6jbmt"/></g>`,
		"fallback": "iconaut:school",
	});
}

export default Component;
