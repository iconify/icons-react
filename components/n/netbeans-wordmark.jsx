import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kjtix-3kq.css';
import '../../css/z/zr7cupbgx.css';
import '../../css/v/v2u8t2bnl.css';
import '../../css/a/a3ln7p84l.css';
import '../../css/r/rfonv72mp.css';
import '../../css/y/y4rl84b7n.css';
import '../../css/l/lvz-rkb4b.css';
import '../../css/i/ilhktr7-i.css';
import '../../css/m/m85y1gbhm.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kjtix-3kq"/><path class="zr7cupbgx"/><path class="v2u8t2bnl"/><path class="a3ln7p84l"/><path class="rfonv72mp"/><path class="y4rl84b7n"/><path class="lvz-rkb4b"/><path class="ilhktr7-i"/><path class="m85y1gbhm"/>`,
		"fallback": "devicon:netbeans-wordmark",
	});
}

export default Component;
