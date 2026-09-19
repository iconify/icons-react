import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pgz7pebzt.css';
import '../../css/f/fliydl4-z.css';
import '../../css/o/o4m_-_bfl.css';
import '../../css/m/mn2ysebzg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="pgz7pebzt"/><path clip-rule="evenodd" class="fliydl4-z"/><path class="o4m_-_bfl"/><path class="mn2ysebzg"/></g>`,
		"fallback": "pepicons:television-print",
	});
}

export default Component;
