import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ot0darl2r.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/eucpwbb2d.css';
import '../../css/w/w93ektbcb.css';
import '../../css/y/ygxy35b2s.css';
import '../../css/w/wjf3mzdsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ot0darl2r secondary"/><g class="dt0cm9dhy primary"><path class="eucpwbb2d"/><path class="w93ektbcb"/><path class="ygxy35b2s"/><path class="wjf3mzdsn"/></g>`,
		"fallback": "iconaut:list-music-duo",
	});
}

export default Component;
