import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/f/fzwa5ibck.css';
import '../../css/z/zk4s3ndgh.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/z/ztixo-hrn.css';
import '../../css/k/k4dtyxbnp.css';
import '../../css/a/aa005fb1w.css';
import '../../css/r/rc2h2rq4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="fzwa5ibck wm-deco"/><path class="wm-deco zk4s3ndgh"/><path class="o7-ag87sb wm-deco"/><path class="wm-k ztixo-hrn"/><path class="k4dtyxbnp wm-a"/><path class="aa005fb1w wm-k"/><path class="rc2h2rq4k wm-a"/></g>`,
		"fallback": "withicons:ship-blueprint",
	});
}

export default Component;
