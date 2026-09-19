import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jqyziyb5h.css';
import '../../css/b/bbpssze2p.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="jqyziyb5h"/><path clip-rule="evenodd" class="bbpssze2p"/></g>`,
		"fallback": "glyphs-poly:mouse-2",
	});
}

export default Component;
