import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hqgyddbgl.css';
import '../../css/j/jbr891p-c.css';
import '../../css/c/c2dyrzb5m.css';
import '../../css/c/cdju2hbdr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="hqgyddbgl"/><path class="jbr891p-c"/><path clip-rule="evenodd" class="c2dyrzb5m"/><path class="cdju2hbdr"/></g>`,
		"fallback": "glyphs:mold-outline",
	});
}

export default Component;
