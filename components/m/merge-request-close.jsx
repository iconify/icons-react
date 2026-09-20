import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jz2fpklzc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jz2fpklzc"/>`,
		"fallback": "pajamas:merge-request-close",
	});
}

export default Component;
