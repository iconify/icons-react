import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/c/c8vg9w67k.css';
import '../../css/j/j697l3uzc.css';
import '../../css/v/vbj2lk1_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="c8vg9w67k"/><path class="j697l3uzc"/><path class="vbj2lk1_x"/></g>`,
		"fallback": "streamline-logos:steinberg-logo",
	});
}

export default Component;
