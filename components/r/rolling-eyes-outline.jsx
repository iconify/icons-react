import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ijhlcccnk.css';
import '../../css/i/irnrs2b6w.css';
import '../../css/l/l4qf8vk5b.css';
import '../../css/i/i8z0nqruo.css';
import '../../css/z/z-onjebwx.css';
import '../../css/p/peejenwcc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ijhlcccnk"/><path clip-rule="evenodd" class="irnrs2b6w"/><path clip-rule="evenodd" class="l4qf8vk5b"/><path class="i8z0nqruo"/><path clip-rule="evenodd" class="z-onjebwx"/><path clip-rule="evenodd" class="peejenwcc"/></g>`,
		"fallback": "glyphs:rolling-eyes-outline",
	});
}

export default Component;
