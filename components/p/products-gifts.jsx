import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mdga26_1w.css';
import '../../css/h/h_rrp_1zi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mdga26_1w"/><path class="h_rrp_1zi"/></g>`,
		"fallback": "streamline-ultimate:products-gifts",
	});
}

export default Component;
