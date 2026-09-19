import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jqyziyb5h.css';
import '../../css/e/eeuh5cbrn.css';
import '../../css/t/tcoicyila.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="jqyziyb5h"/><path clip-rule="evenodd" class="eeuh5cbrn"/><path clip-rule="evenodd" class="tcoicyila"/></g>`,
		"fallback": "glyphs-poly:mouse",
	});
}

export default Component;
