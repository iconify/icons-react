import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_oec0bex.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w_oec0bex"/>`,
		"fallback": "fa:question-circle",
	});
}

export default Component;
