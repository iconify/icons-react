import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwkn7bcfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vwkn7bcfm"/>`,
		"fallback": "hugeicons:resize-01",
	});
}

export default Component;
