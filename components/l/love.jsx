import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umm606kxf.css';
import '../../css/m/mo3r0eb0r.css';
import '../../css/p/phreexrfl.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="umm606kxf"><path class="mo3r0eb0r"/><path class="phreexrfl"/></g>`,
		"fallback": "streamline-stickies-color:love",
	});
}

export default Component;
