import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/k/kjzly26zd.css';
import '../../css/e/ep3aj1k1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="kjzly26zd"/><path class="ep3aj1k1d"/></g>`,
		"fallback": "keyline-icons:toggle-off-sharp-duotone",
	});
}

export default Component;
