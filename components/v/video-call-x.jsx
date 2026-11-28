import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_iv6r6-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w_iv6r6-v"/>`,
		"fallback": "noviair-light:video-call-x",
	});
}

export default Component;
