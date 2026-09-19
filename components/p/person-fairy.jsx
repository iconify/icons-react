import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hxx5cbc5a.css';
import '../../css/t/tof8bjbhp.css';
import '../../css/v/vm8glirhj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hxx5cbc5a"/><path class="tof8bjbhp"/><path class="vm8glirhj"/></g>`,
		"fallback": "fluent-emoji-high-contrast:person-fairy",
	});
}

export default Component;
