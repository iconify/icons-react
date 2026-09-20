import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvtn-kbvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvtn-kbvo"/>`,
		"fallback": "keyline-icons:settings-dot-sharp",
	});
}

export default Component;
