import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o5zx76b2u.css';
import '../../css/w/wosqvob-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o5zx76b2u"/><path class="wosqvob-t"/></g>`,
		"fallback": "streamline-cyber-color:swimming-pool-2",
	});
}

export default Component;
