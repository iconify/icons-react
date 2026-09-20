import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxz5dc_of.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dxz5dc_of"/>`,
		"fallback": "selfhst:signoz-dark",
	});
}

export default Component;
