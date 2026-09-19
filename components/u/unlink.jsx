import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/e/e1wyg2csk.css';
import '../../css/y/yo27kfb1y.css';
import '../../css/d/dbcx10b6c.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="e1wyg2csk"/><path class="yo27kfb1y"/><path class="dbcx10b6c"/></g>`,
		"fallback": "glyphs-poly:unlink",
	});
}

export default Component;
