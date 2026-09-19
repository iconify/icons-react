import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/d/dyone_blp.css';
import '../../css/q/q-em7j0jk.css';
import '../../css/g/gi9trt-rw.css';
import '../../css/q/qy_qwjbnq.css';
import '../../css/x/xq4ykab6k.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="dyone_blp"/><ellipse class="q-em7j0jk"/><path class="gi9trt-rw"/><ellipse class="qy_qwjbnq"/><path class="xq4ykab6k"/></g>`,
		"fallback": "glyphs-poly:music",
	});
}

export default Component;
