import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/x/x4q8rjbot.css';
import '../../css/l/llc6ycc6b.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="x4q8rjbot"/><path class="llc6ycc6b"/></g>`,
		"fallback": "glyphs-poly:modulo",
	});
}

export default Component;
