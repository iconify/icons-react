import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vv45h0b6f.css';
import '../../css/j/jb9kertwe.css';
import '../../css/z/z57-8sgwa.css';
import '../../css/m/m1o7iibig.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vv45h0b6f"/><path class="jb9kertwe"/><path class="z57-8sgwa"/><path class="m1o7iibig"/></g>`,
		"fallback": "streamline-color:insurance-hand",
	});
}

export default Component;
