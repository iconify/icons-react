import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7a05abhs.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7a05abhs"/>`,
		"fallback": "pullo:send-to-back-thin",
	});
}

export default Component;
