import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/s/srxib6aqe.css';
import '../../css/w/wpfwgq37g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="srxib6aqe"/><path class="wpfwgq37g"/></g>`,
		"fallback": "streamline-cyber:timer-10",
	});
}

export default Component;
