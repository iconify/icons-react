import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rymil3blb.css';
import '../../css/i/iqcw7ybod.css';
import '../../css/n/n4y5veybd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rymil3blb"/><path class="iqcw7ybod"/><path class="n4y5veybd"/></g>`,
		"fallback": "glyphs:tachometer-8-duo",
	});
}

export default Component;
