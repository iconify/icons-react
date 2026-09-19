import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/caqnx5y4d.css';
import '../../css/t/t5efulchj.css';
import '../../css/r/rh5gwkc7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="caqnx5y4d"/><path class="t5efulchj"/><path class="rh5gwkc7o"/></g>`,
		"fallback": "hugeicons:money-receive-circle",
	});
}

export default Component;
