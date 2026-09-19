import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5xt_g81n.css';
import '../../css/y/ysmbq7bxl.css';
import '../../css/d/d79oyzb2x.css';
import '../../css/d/d1ym2h3ya.css';
import '../../css/r/rd_oh8biv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5xt_g81n"/><path class="ysmbq7bxl"/><circle class="d79oyzb2x"/><circle class="d1ym2h3ya"/><path class="rd_oh8biv"/>`,
		"fallback": "eos-icons:machine-learning",
	});
}

export default Component;
