import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v7paadc1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v7paadc1j"/>`,
		"fallback": "cbi:wall-appear-group",
	});
}

export default Component;
