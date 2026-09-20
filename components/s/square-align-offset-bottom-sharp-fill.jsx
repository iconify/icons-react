import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1z6d-bhk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w1z6d-bhk"/>`,
		"fallback": "keyline-icons:square-align-offset-bottom-sharp-fill",
	});
}

export default Component;
