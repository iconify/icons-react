import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6s2r5bvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6s2r5bvy"/>`,
		"fallback": "keyline-icons:percent-fill",
	});
}

export default Component;
