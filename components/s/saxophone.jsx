import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qo6udlbzj.css';
import '../../css/t/tdry5hmhi.css';
import '../../css/j/j8a3oubxj.css';
import '../../css/v/vxeo1uj4t.css';
import '../../css/b/b-mfwxbbf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qo6udlbzj"/><path class="tdry5hmhi"/><ellipse class="j8a3oubxj"/><path class="vxeo1uj4t"/><path class="b-mfwxbbf"/>`,
		"fallback": "fxemoji:saxophone",
	});
}

export default Component;
