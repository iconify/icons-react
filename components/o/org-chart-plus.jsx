import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txei9lbcx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="txei9lbcx"/>`,
		"fallback": "noviair-light:org-chart-plus",
	});
}

export default Component;
