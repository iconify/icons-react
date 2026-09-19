import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xc9b90bna.css';
import '../../css/a/ai5cs6a6e.css';
import '../../css/f/fcjz4bwnd.css';
import '../../css/j/jfdb2j0lk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xc9b90bna"><path class="ai5cs6a6e"/><ellipse class="fcjz4bwnd"/><path class="jfdb2j0lk"/></g>`,
		"fallback": "glyphs:music-note-bold",
	});
}

export default Component;
