import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vaq1hab2x.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vaq1hab2x"/>`,
		"fallback": "pullo:send-to-back-fill",
	});
}

export default Component;
