import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/v9acwmm1g.css';
import '../../css/f/fv8g94bol.css';
import '../../css/e/ey0latwck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="v9acwmm1g"/><path class="fv8g94bol"/><path class="ey0latwck"/></g>`,
		"fallback": "hugeicons:shared-drive",
	});
}

export default Component;
