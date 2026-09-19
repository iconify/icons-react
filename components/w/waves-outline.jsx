import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mbo3gib-c.css';
import '../../css/g/gfyint6ne.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mbo3gib-c"/><path class="gfyint6ne"/></g>`,
		"fallback": "glyphs:waves-outline",
	});
}

export default Component;
