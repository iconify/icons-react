import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/t/t482qccbe.css';
import '../../css/z/z_6futb0s.css';
import '../../css/j/j4jy418bn.css';
import '../../css/h/hw8xu18eq.css';
import '../../css/d/deumc_cwu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="t482qccbe"/><path class="z_6futb0s"/><path class="j4jy418bn"/><path class="hw8xu18eq"/><path class="deumc_cwu"/></g>`,
		"fallback": "streamline-sharp-color:record-player",
	});
}

export default Component;
