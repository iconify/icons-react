import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/k/kbumho25s.css';
import '../../css/x/xtd9eubfb.css';
import '../../css/r/r8g_vabug.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="kbumho25s"/><path class="xtd9eubfb"/><path class="r8g_vabug"/></g>`,
		"fallback": "glyphs:timer-2",
	});
}

export default Component;
