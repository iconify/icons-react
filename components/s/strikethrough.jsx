import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emvqg1cza.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="emvqg1cza"/>`,
		"fallback": "fa-solid:strikethrough",
	});
}

export default Component;
