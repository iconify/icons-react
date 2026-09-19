import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdj0r9j_p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdj0r9j_p"/>`,
		"fallback": "cib:the-mighty",
	});
}

export default Component;
