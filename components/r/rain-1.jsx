import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r5khsw78s.css';
import '../../css/b/b-tmcmpaf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="r5khsw78s"/><path class="b-tmcmpaf"/></g>`,
		"fallback": "glyphs-poly:rain-1",
	});
}

export default Component;
