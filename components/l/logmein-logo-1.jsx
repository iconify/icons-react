import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/j/j697l3uzc.css';
import '../../css/w/w-skwwbxi.css';
import '../../css/p/psudulixv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="j697l3uzc"/><path clip-rule="evenodd" class="w-skwwbxi"/><path class="psudulixv"/></g>`,
		"fallback": "streamline-logos:logmein-logo-1",
	});
}

export default Component;
