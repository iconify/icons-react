import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ut24dvbdg.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/hp7wiib7x.css';
import '../../css/r/rxzdi1bsc.css';
import '../../css/h/hbxtj8hnk.css';
import '../../css/j/jzx1htbjk.css';
import '../../css/a/aorqrfu5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary ut24dvbdg"/><g class="dt0cm9dhy primary"><path class="hp7wiib7x"/><path class="rxzdi1bsc"/><path class="hbxtj8hnk"/><path class="jzx1htbjk"/><path class="aorqrfu5e"/></g>`,
		"fallback": "iconaut:scale-balance-duo",
	});
}

export default Component;
