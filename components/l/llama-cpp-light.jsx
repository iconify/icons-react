import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etk58nhhr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etk58nhhr"/>`,
		"fallback": "selfhst:llama-cpp-light",
	});
}

export default Component;
