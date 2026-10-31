import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nley873cf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nley873cf"/>`,
		"fallback": "coolicons:save-fill-round",
	});
}

export default Component;
