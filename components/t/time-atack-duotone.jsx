import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvsj4rbkk.css';
import '../../css/f/f42ipub-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="yvsj4rbkk"/><path class="f42ipub-z"/>`,
		"fallback": "lets-icons:time-atack-duotone",
	});
}

export default Component;
