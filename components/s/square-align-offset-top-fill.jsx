import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jlv7qya0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jlv7qya0l"/>`,
		"fallback": "keyline-icons:square-align-offset-top-fill",
	});
}

export default Component;
