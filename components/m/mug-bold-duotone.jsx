import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/c/cf4va2ows.css';
import '../../css/l/ldse3ccpn.css';
import '../../css/u/uryn3_6yg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="cf4va2ows"/><path class="ldse3ccpn"/></g><path clip-rule="evenodd" class="uryn3_6yg"/></g>`,
		"fallback": "solar:mug-bold-duotone",
	});
}

export default Component;
