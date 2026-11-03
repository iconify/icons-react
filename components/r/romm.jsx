import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhdeblbtp.css';
import '../../css/h/h8edz9ogb.css';
import '../../css/p/p2s5fbblg.css';
import '../../css/b/b7tbiwbrt.css';
import '../../css/r/rwbifmbkz.css';
import '../../css/d/dqibh3x7u.css';
import '../../css/i/ip1i0mbkx.css';
import '../../css/r/rkhp9jxfn.css';

const viewBox = {"width":2000,"height":2000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhdeblbtp"/><path class="h8edz9ogb"/><path class="p2s5fbblg"/><path class="b7tbiwbrt"/><circle class="rwbifmbkz"/><circle class="dqibh3x7u"/><circle transform="rotate(-45 1307.71 717.868)" class="ip1i0mbkx"/><circle class="rkhp9jxfn"/>`,
		"fallback": "thesvg-color:romm",
	});
}

export default Component;
