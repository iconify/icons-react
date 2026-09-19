import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/waj2sm3ma.css';
import '../../css/g/g7vw0fb-l.css';
import '../../css/l/lpsbhjbjv.css';
import '../../css/r/ratx3zrrr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="waj2sm3ma"/><path class="g7vw0fb-l"/><path clip-rule="evenodd" class="lpsbhjbjv"/><path class="ratx3zrrr"/></g>`,
		"fallback": "glyphs:life-ring-duo",
	});
}

export default Component;
