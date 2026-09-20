import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktdokp0kc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ktdokp0kc"/>`,
		"fallback": "reicon:user-remove-filled",
	});
}

export default Component;
