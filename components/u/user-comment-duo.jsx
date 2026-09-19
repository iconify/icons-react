import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mt5z46_ts.css';
import '../../css/g/gmjrenb-r.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mt5z46_ts"/><path class="gmjrenb-r"/></g>`,
		"fallback": "glyphs:user-comment-duo",
	});
}

export default Component;
