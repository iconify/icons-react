import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uouj_4bos.css';

const viewBox = {"width":448,"height":496};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uouj_4bos"/>`,
		"fallback": "ps:pizza",
	});
}

export default Component;
