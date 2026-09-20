import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/o8wz-8byq.css';
import '../../css/d/dk827795l.css';
import '../../css/j/jb0hw74ns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="o8wz-8byq"/><path class="dk827795l"/><path class="jb0hw74ns"/></g>`,
		"fallback": "streamline-ultimate:task-finger-show",
	});
}

export default Component;
