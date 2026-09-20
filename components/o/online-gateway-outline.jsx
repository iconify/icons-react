import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzvaq3_vp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzvaq3_vp"/>`,
		"fallback": "lsicon:online-gateway-outline",
	});
}

export default Component;
