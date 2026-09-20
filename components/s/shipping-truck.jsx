import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hgttbj1md.css';
import '../../css/q/q2y7mabra.css';
import '../../css/u/us2-dhb1a.css';
import '../../css/i/ia2fn6f6g.css';
import '../../css/q/qkctu6bxu.css';
import '../../css/j/junp4cckr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hgttbj1md"/><path class="q2y7mabra"/><path class="us2-dhb1a"/><path class="ia2fn6f6g"/><path class="qkctu6bxu"/><path class="junp4cckr"/></g>`,
		"fallback": "streamline-color:shipping-truck",
	});
}

export default Component;
