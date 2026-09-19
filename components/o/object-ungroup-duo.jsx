import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t3aqp5bet.css';
import '../../css/p/plk4-9zsb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t3aqp5bet"/><path class="plk4-9zsb"/></g>`,
		"fallback": "glyphs:object-ungroup-duo",
	});
}

export default Component;
