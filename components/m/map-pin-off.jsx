import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/bd0osc6-a.css';
import '../../css/a/ahyvrkbbo.css';
import '../../css/d/dyq367b8g.css';
import '../../css/a/as11b96td.css';
import '../../css/v/vvx5zcbvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="bd0osc6-a wm-shadow"/><path class="ahyvrkbbo wm-shadow"/><path class="dyq367b8g"/><path class="as11b96td"/><path class="vvx5zcbvx wm-s"/></g>`,
		"fallback": "withicons-brutal:map-pin-off",
	});
}

export default Component;
