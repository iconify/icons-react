import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cj3gj6buq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cj3gj6buq"/>`,
		"fallback": "streamline-flex:merge-pdf-remix",
	});
}

export default Component;
