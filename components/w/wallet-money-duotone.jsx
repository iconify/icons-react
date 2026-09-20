import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x_811s6vd.css';
import '../../css/p/pyj541-1p.css';
import '../../css/q/qqnch-iej.css';
import '../../css/l/lx68tvzox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x_811s6vd"/><path clip-rule="evenodd" class="pyj541-1p"/><path class="qqnch-iej"/><path class="lx68tvzox"/></g>`,
		"fallback": "reicon:wallet-money-duotone",
	});
}

export default Component;
