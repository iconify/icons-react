import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qocopbb2u.css';
import '../../css/g/gi_h19bgs.css';
import '../../css/x/xpxc9t_-x.css';
import '../../css/u/ubcotg3vs.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qocopbb2u"/><path clip-rule="evenodd" class="gi_h19bgs"/><path class="xpxc9t_-x"/><path clip-rule="evenodd" class="ubcotg3vs"/></g>`,
		"fallback": "glyphs:layout-1-outline",
	});
}

export default Component;
