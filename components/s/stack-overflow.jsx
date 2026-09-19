import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k7eat9bey.css';

const viewBox = {"width":1536,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k7eat9bey"/>`,
		"fallback": "fa:stack-overflow",
	});
}

export default Component;
