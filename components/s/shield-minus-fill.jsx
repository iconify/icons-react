import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_c3ofb3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f_c3ofb3g"/>`,
		"fallback": "keyline-icons:shield-minus-fill",
	});
}

export default Component;
