import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xemdinble.css';
import '../../css/h/hj5nmbbbk.css';
import '../../css/k/k-0qe8evz.css';
import '../../css/o/ot7sdib_g.css';
import '../../css/g/g91lz69rw.css';
import '../../css/l/lvmme0b8b.css';
import '../../css/d/dr81tqbmj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xemdinble"/><path class="hj5nmbbbk"/><path class="k-0qe8evz"/><path class="ot7sdib_g"/><path class="g91lz69rw"/><path class="lvmme0b8b"/><path class="dr81tqbmj"/></g>`,
		"fallback": "fluent-emoji-flat:ram",
	});
}

export default Component;
