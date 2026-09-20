import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4xofjqdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s4xofjqdc"/>`,
		"fallback": "si:italic-duotone",
	});
}

export default Component;
