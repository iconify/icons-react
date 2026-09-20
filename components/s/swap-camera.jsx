import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nnebg0b2s.css';
import '../../css/q/q6gz-gb_g.css';
import '../../css/i/ix4n0acam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="nnebg0b2s"/><path class="q6gz-gb_g"/><path class="ix4n0acam"/></g>`,
		"fallback": "streamline-ultimate:swap-camera",
	});
}

export default Component;
