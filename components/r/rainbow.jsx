import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eiazytb8b.css';
import '../../css/o/opv0hbcze.css';
import '../../css/z/zk2c6ncue.css';
import '../../css/g/gp04-b1jq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eiazytb8b"/><path class="opv0hbcze"/><path class="zk2c6ncue"/><path class="gp04-b1jq"/></g>`,
		"fallback": "andrsrxn:rainbow",
	});
}

export default Component;
