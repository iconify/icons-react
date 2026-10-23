import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c6gnjjbrl.css';
import '../../css/a/axp2ftd3q.css';
import '../../css/g/gevjarbuq.css';
import '../../css/g/ggus2wbkz.css';
import '../../css/y/yp8vhbuff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="c6gnjjbrl"/><path class="axp2ftd3q"/><path class="gevjarbuq"/><path class="ggus2wbkz"/><path class="yp8vhbuff"/></g>`,
		"fallback": "andrsrxn:snowman",
	});
}

export default Component;
