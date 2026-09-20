import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uiwnp7bsn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uiwnp7bsn"/>`,
		"fallback": "raphael:loaction2",
	});
}

export default Component;
