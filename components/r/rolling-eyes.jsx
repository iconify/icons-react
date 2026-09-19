import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/am770-rkn.css';
import '../../css/y/yoskqcbdm.css';
import '../../css/i/ipxyt99db.css';
import '../../css/i/i07n3sgqt.css';
import '../../css/r/rox8-9b8s.css';
import '../../css/x/xs768nbmt.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="am770-rkn"/><path class="yoskqcbdm"/><rect class="ipxyt99db"/><circle class="i07n3sgqt"/><rect class="rox8-9b8s"/><circle class="xs768nbmt"/></g>`,
		"fallback": "glyphs-poly:rolling-eyes",
	});
}

export default Component;
