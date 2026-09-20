import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhtkd8b-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhtkd8b-d"/>`,
		"fallback": "mage:pen-fill",
	});
}

export default Component;
