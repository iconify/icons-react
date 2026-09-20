import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yq5ur9bzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yq5ur9bzo"/>`,
		"fallback": "mdi:numeric-six-box",
	});
}

export default Component;
