import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/az1xhub8r.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wttwc7bye.css';
import '../../css/p/pgt6w1b0j.css';
import '../../css/q/qtmyn7x6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="az1xhub8r secondary"/><g class="dt0cm9dhy primary"><path class="wttwc7bye"/><path class="pgt6w1b0j"/><path class="qtmyn7x6r"/></g>`,
		"fallback": "iconaut:metronome-duo",
	});
}

export default Component;
