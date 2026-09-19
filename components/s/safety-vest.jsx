import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dj47mj-gb.css';
import '../../css/y/y3gnubf6a.css';
import '../../css/v/v-q851bmk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dj47mj-gb"/><path class="y3gnubf6a"/><path class="v-q851bmk"/></g>`,
		"fallback": "fluent-emoji-flat:safety-vest",
	});
}

export default Component;
