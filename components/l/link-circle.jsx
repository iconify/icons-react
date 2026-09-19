import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-1rciyzo.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-1rciyzo"/>`,
		"fallback": "f7:link-circle",
	});
}

export default Component;
