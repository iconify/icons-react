import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fb7yk1dfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fb7yk1dfw"/>`,
		"fallback": "mage:shut-down-fill",
	});
}

export default Component;
