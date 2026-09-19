import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n9bj_pbwb.css';
import '../../css/y/y4bjh8yzk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n9bj_pbwb"/><path class="y4bjh8yzk"/></g>`,
		"fallback": "fluent-emoji-flat:ribbon",
	});
}

export default Component;
