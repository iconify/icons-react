import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rehbl8c6s.css';
import '../../css/b/bmhf9qwuy.css';
import '../../css/z/zmi__cblv.css';
import '../../css/p/p785xu-hv.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/x/xzj-gi6qx.css';
import '../../css/u/uoechtczl.css';
import '../../css/j/jibfrubgt.css';
import '../../css/x/x46jonbqs.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rehbl8c6s"/><circle class="bmhf9qwuy"/><circle class="zmi__cblv"/><circle class="p785xu-hv"/><g class="ij2x_72vy"><path class="xzj-gi6qx"/><circle class="uoechtczl"/><circle class="jibfrubgt"/><circle class="x46jonbqs"/></g>`,
		"fallback": "openmoji:vertical-traffic-light",
	});
}

export default Component;
