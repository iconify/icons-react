import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcz2pcbmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kcz2pcbmm"/>`,
		"fallback": "noviair-light:user-info",
	});
}

export default Component;
