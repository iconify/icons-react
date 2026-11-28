import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/o8a3j1inw.css';
import '../../css/y/ygb5fvg-l.css';
import '../../css/f/f5gaxccbi.css';
import '../../css/h/h0pl2fp6o.css';
import '../../css/v/vqef7sbpb.css';
import '../../css/k/ky1-w1byj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="o8a3j1inw"/><path class="ygb5fvg-l"/><path class="f5gaxccbi"/><path class="h0pl2fp6o"/><path class="vqef7sbpb"/><path class="ky1-w1byj"/></g>`,
		"fallback": "iconaut:layers-dashed",
	});
}

export default Component;
