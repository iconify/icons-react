import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xvu-6cc7j.css';
import '../../css/w/wggdrk1xg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xvu-6cc7j"/><path class="wggdrk1xg"/></g>`,
		"fallback": "glyphs:sort-numeric-down-duo",
	});
}

export default Component;
