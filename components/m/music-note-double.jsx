import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pwmtrpb8b.css';
import '../../css/f/fix04rbfz.css';
import '../../css/c/c757m7bdq.css';
import '../../css/u/u1ulbtb_i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="pwmtrpb8b"/><ellipse class="fix04rbfz"/><ellipse class="c757m7bdq"/><path clip-rule="evenodd" class="u1ulbtb_i"/></g>`,
		"fallback": "pepicons:music-note-double",
	});
}

export default Component;
