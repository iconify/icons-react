import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_w3injsq.css';
import '../../css/r/rwg8vfj3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_w3injsq"/><path class="rwg8vfj3m"/>`,
		"fallback": "streamline-ultimate:smart-watch-cirle-bold",
	});
}

export default Component;
