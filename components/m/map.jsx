import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qn_wtjb0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qn_wtjb0b"/>`,
		"fallback": "griddy-icons:map",
	});
}

export default Component;
