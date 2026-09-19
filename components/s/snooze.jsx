import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pz2c466ij.css';
import '../../css/u/unw0i2xbo.css';
import '../../css/x/xtn16ws4v.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pz2c466ij"/><path class="unw0i2xbo"/><path class="xtn16ws4v"/></g>`,
		"fallback": "glyphs-poly:snooze",
	});
}

export default Component;
