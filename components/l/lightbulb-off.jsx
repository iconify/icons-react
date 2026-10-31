import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/xvzzsg79i.css';
import '../../css/s/sc9_0k_xb.css';
import '../../css/o/onmzq9sqg.css';
import '../../css/p/p908odb-e.css';
import '../../css/v/vvx5zcbvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow xvzzsg79i"/><path class="sc9_0k_xb wm-shadow"/><path class="onmzq9sqg"/><path class="p908odb-e"/><path class="vvx5zcbvx wm-s"/></g>`,
		"fallback": "withicons-brutal:lightbulb-off",
	});
}

export default Component;
