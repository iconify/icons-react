import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xpggevw-g.css';
import '../../css/y/ybx-4bctm.css';
import '../../css/i/i44kps-wg.css';
import '../../css/u/uet654h4f.css';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mwo-bhu0m.css';
import '../../css/s/setm5z74p.css';
import '../../css/y/y--rs-1ym.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xpggevw-g"/><path class="ybx-4bctm"/><path class="i44kps-wg"/><path clip-rule="evenodd" class="uet654h4f"/><g clip-rule="evenodd" class="n1lsf0bnc"><path class="mwo-bhu0m"/><circle class="setm5z74p"/><path class="y--rs-1ym"/></g>`,
		"fallback": "devicon-plain:ohmyzsh",
	});
}

export default Component;
