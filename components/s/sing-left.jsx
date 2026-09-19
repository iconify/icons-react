import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/l/ldqr0mp1e.css';
import '../../css/i/iqqah8buy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="shu3xdl9q"/><circle class="ldqr0mp1e"/><path class="iqqah8buy"/></g>`,
		"fallback": "hugeicons:sing-left",
	});
}

export default Component;
