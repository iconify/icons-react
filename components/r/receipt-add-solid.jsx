import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a37v5xbrn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a37v5xbrn"/>`,
		"fallback": "streamline:receipt-add-solid",
	});
}

export default Component;
