import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rc9jhobin.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/oszrj5blc.css';
import '../../css/i/inmwkd4ia.css';
import '../../css/b/brsnfwb1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rc9jhobin secondary"/><g class="dt0cm9dhy primary"><path class="oszrj5blc"/><path class="inmwkd4ia"/><path class="brsnfwb1s"/></g>`,
		"fallback": "iconaut:intersect-duo",
	});
}

export default Component;
