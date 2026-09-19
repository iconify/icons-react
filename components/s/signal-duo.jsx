import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ramwnib2z.css';
import '../../css/m/m8zf1lbpi.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ramwnib2z"/><path class="m8zf1lbpi"/></g>`,
		"fallback": "glyphs:signal-duo",
	});
}

export default Component;
