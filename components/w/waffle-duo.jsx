import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i9ny4bbtp.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/nwv1ikbat.css';
import '../../css/l/ll03xspng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i9ny4bbtp secondary"/><g class="dt0cm9dhy primary"><path class="nwv1ikbat"/><path class="ll03xspng"/></g>`,
		"fallback": "iconaut:waffle-duo",
	});
}

export default Component;
