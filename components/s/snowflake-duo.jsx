import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pdempbc_o.css';
import '../../css/g/gxc22brbl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pdempbc_o"/><path class="gxc22brbl"/></g>`,
		"fallback": "glyphs:snowflake-duo",
	});
}

export default Component;
