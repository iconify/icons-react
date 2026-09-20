import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o3a2aacyc.css';
import '../../css/y/yv8fuzbct.css';
import '../../css/y/yto5y8bbe.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/y/yws1qebfx.css';
import '../../css/r/rp169lb8c.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o3a2aacyc"/><path class="yv8fuzbct"/><path class="yto5y8bbe"/><g class="ij2x_72vy"><path class="yws1qebfx"/><path class="rp169lb8c"/></g>`,
		"fallback": "openmoji:spiral-notepad",
	});
}

export default Component;
