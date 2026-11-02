import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/w/wtdviabfg.css';
import '../../css/a/a9b_oobde.css';
import '../../css/u/uzu-fovlv.css';
import '../../css/u/umjjmybnc.css';
import '../../css/m/mg66cpbgr.css';
import '../../css/q/q85_l3b_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="wtdviabfg"/><path class="a9b_oobde"/><path class="uzu-fovlv"/><path class="umjjmybnc"/><path class="mg66cpbgr"/><path class="q85_l3b_q"/></g>`,
		"fallback": "matita:pill",
	});
}

export default Component;
