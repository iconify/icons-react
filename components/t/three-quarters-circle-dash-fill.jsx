import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hm_uf7cdm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hm_uf7cdm"/>`,
		"fallback": "mingcute:three-quarters-circle-dash-fill",
	});
}

export default Component;
