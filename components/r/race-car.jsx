import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b3qiuzyym.css';
import '../../css/k/k65e6cbzd.css';
import '../../css/m/mu9py3vhm.css';
import '../../css/f/fmqakbb3j.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b3qiuzyym"/><path clip-rule="evenodd" class="k65e6cbzd"/><path class="mu9py3vhm"/><path class="fmqakbb3j"/></g>`,
		"fallback": "glyphs-poly:race-car",
	});
}

export default Component;
