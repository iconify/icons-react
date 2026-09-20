import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f041-1cwe.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f041-1cwe"/>`,
		"fallback": "streamline:search-dollar-remix",
	});
}

export default Component;
