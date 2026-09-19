import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zi0tphd-c.css';
import '../../css/h/h1r_1vbuz.css';
import '../../css/r/rhfe71a6y.css';
import '../../css/e/exh1ppbgt.css';
import '../../css/r/r6xfiyb_d.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zi0tphd-c"/><path class="h1r_1vbuz"/><path class="rhfe71a6y"/><path class="exh1ppbgt"/><path class="r6xfiyb_d"/>`,
		"fallback": "fxemoji:monkey",
	});
}

export default Component;
