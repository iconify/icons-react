import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jaq560y5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jaq560y5g"/>`,
		"fallback": "mdi:vector-triangle",
	});
}

export default Component;
