import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ycqe6sbbp.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/e-ab50cow.css';
import '../../css/q/q6a7scmtz.css';
import '../../css/k/kxv6pebud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary ycqe6sbbp"/><g class="dt0cm9dhy primary"><path class="e-ab50cow"/><path class="q6a7scmtz"/><path class="kxv6pebud"/></g>`,
		"fallback": "iconaut:text-to-speech-duo",
	});
}

export default Component;
