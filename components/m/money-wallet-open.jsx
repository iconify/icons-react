import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pturp2bhc.css';
import '../../css/o/ojt3mcbzj.css';
import '../../css/r/rzsggxn3c.css';
import '../../css/e/e67xv9bsc.css';
import '../../css/i/ihen938et.css';
import '../../css/l/l-drr12rk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pturp2bhc"/><path class="ojt3mcbzj"/><path class="rzsggxn3c"/><path class="e67xv9bsc"/><path class="ihen938et"/><path class="l-drr12rk"/></g>`,
		"fallback": "streamline-ultimate-color:money-wallet-open",
	});
}

export default Component;
