import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/au7a6tb1g.css';
import '../../css/a/a4g2qzb3h.css';
import '../../css/t/txxzuzbwv.css';
import '../../css/i/ieb9-qkpx.css';
import '../../css/p/pxz1_zber.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="au7a6tb1g"/><path class="a4g2qzb3h"/><path class="txxzuzbwv"/><path class="ieb9-qkpx"/><path class="pxz1_zber"/></g>`,
		"fallback": "iconaut:train-tunnel",
	});
}

export default Component;
