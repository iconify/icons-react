import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/aa0449bjo.css';
import '../../css/d/dmeqm9b9o.css';
import '../../css/u/u-4o0pbez.css';
import '../../css/f/fbkhmwd0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="aa0449bjo wm-shadow"/><path class="dmeqm9b9o wm-shadow"/><path class="u-4o0pbez"/><path class="fbkhmwd0i"/></g>`,
		"fallback": "withicons-brutal:leaf",
	});
}

export default Component;
