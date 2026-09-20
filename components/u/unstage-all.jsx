import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/td6ma8plu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="td6ma8plu"/>`,
		"fallback": "pajamas:unstage-all",
	});
}

export default Component;
