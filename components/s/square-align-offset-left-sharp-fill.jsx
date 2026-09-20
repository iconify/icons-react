import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6l_u-bsb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j6l_u-bsb"/>`,
		"fallback": "keyline-icons:square-align-offset-left-sharp-fill",
	});
}

export default Component;
