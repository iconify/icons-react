import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/s/stnrnkbtz.css';
import '../../css/q/qgcm3qb8i.css';
import '../../css/z/zhkkcsbgq.css';
import '../../css/c/cdgo83mfa.css';
import '../../css/c/ctvihhbhg.css';
import '../../css/l/lf-uk3ben.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="stnrnkbtz"/><path class="qgcm3qb8i"/><path class="wm-shine zhkkcsbgq"/><path class="cdgo83mfa"/><path class="ctvihhbhg"/><path class="lf-uk3ben"/></g>`,
		"fallback": "withicons-kawaii:plane",
	});
}

export default Component;
