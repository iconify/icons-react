import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/l/ldxubll4d.css';
import '../../css/v/vf8rlvbfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ldxubll4d"/><path class="vf8rlvbfx"/></g>`,
		"fallback": "keyline-icons:navigation-sharp-fill",
	});
}

export default Component;
