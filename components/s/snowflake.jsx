import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yo2_o9bpd.css';
import '../../css/d/d-37ovbyq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yo2_o9bpd"/><path class="d-37ovbyq"/></g>`,
		"fallback": "glyphs-poly:snowflake",
	});
}

export default Component;
