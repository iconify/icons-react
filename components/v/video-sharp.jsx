import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wnjr0mc5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wnjr0mc5h"/>`,
		"fallback": "keyline-icons:video-sharp",
	});
}

export default Component;
