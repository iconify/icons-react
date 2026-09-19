import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vljowpp8g.css';
import '../../css/w/wiw6meibi.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vljowpp8g"/><path class="wiw6meibi"/></g>`,
		"fallback": "glyphs:sd-card-1-duo",
	});
}

export default Component;
