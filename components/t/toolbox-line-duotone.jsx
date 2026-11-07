import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zp_0nn68i.css';
import '../../css/s/sznrqvsef.css';
import '../../css/r/r-0c4ud0t.css';
import '../../css/r/r6j097c4b.css';
import '../../css/j/j61xww1jd.css';
import '../../css/l/le9iyfafr.css';
import '../../css/x/x9qq19fwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="zp_0nn68i"/><path class="sznrqvsef"/><path class="r-0c4ud0t"/><path class="r6j097c4b"/><path class="j61xww1jd"/><path class="le9iyfafr"/><path class="x9qq19fwj"/></g>`,
		"fallback": "solar:toolbox-line-duotone",
	});
}

export default Component;
