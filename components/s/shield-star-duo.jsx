import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p89-jwwae.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j2vbli9go.css';
import '../../css/i/i2qf3lzja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p89-jwwae secondary"/><g class="dt0cm9dhy primary"><path class="j2vbli9go"/><path class="i2qf3lzja"/></g>`,
		"fallback": "iconaut:shield-star-duo",
	});
}

export default Component;
