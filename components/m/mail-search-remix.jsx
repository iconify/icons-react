import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7q77thdp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j7q77thdp"/>`,
		"fallback": "streamline:mail-search-remix",
	});
}

export default Component;
