import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q63kxsb2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q63kxsb2y"/>`,
		"fallback": "lets-icons:on-button-light",
	});
}

export default Component;
