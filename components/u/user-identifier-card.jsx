import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/t/tbp4npmpq.css';
import '../../css/e/engxm5j0v.css';
import '../../css/b/bqs72zb9t.css';
import '../../css/h/hqte10bgo.css';
import '../../css/c/c1pnlkmkq.css';
import '../../css/y/yb5tb3b2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="tbp4npmpq"/><path class="engxm5j0v"/><path class="bqs72zb9t"/><path class="hqte10bgo"/><path class="c1pnlkmkq"/><path class="yb5tb3b2v"/></g>`,
		"fallback": "streamline-sharp-color:user-identifier-card",
	});
}

export default Component;
