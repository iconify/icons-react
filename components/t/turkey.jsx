import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmxwr-bdz.css';
import '../../css/i/ipz1qcbsc.css';
import '../../css/f/f4m1aurla.css';
import '../../css/o/ov3p5cchl.css';
import '../../css/u/uuu2xx3sq.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmxwr-bdz"/><path class="ipz1qcbsc"/><path class="f4m1aurla"/><path class="ov3p5cchl"/><path class="uuu2xx3sq"/>`,
		"fallback": "iconito:turkey",
	});
}

export default Component;
