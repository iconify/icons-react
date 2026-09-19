import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sm6_hdc6x.css';
import '../../css/g/gfbr0jbld.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sm6_hdc6x"/><path class="gfbr0jbld"/></g>`,
		"fallback": "glyphs:sparkles-duo",
	});
}

export default Component;
