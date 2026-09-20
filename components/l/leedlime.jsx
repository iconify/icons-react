import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4-q1erbf.css';
import '../../css/n/n--4sxbbt.css';
import '../../css/k/kr4df7b3d.css';
import '../../css/m/ma1l1zb8o.css';
import '../../css/g/g5wm2-4yt.css';
import '../../css/q/qtv71wb4m.css';

const viewBox = {"width":1080,"height":1080};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o4-q1erbf"/><path class="n--4sxbbt"/><path class="kr4df7b3d"/><path class="ma1l1zb8o"/><path class="g5wm2-4yt"/><path class="qtv71wb4m"/>`,
		"fallback": "thesvg-color:leedlime",
	});
}

export default Component;
