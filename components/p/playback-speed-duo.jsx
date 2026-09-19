import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bba6s1bkv.css';
import '../../css/j/jfns5ihsk.css';
import '../../css/w/w-klkw3bj.css';
import '../../css/r/rn6_kx1aa.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bba6s1bkv"/><path class="jfns5ihsk"/><path class="w-klkw3bj"/><path class="rn6_kx1aa"/></g>`,
		"fallback": "glyphs:playback-speed-duo",
	});
}

export default Component;
