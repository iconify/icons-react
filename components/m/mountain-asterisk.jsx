import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nq1tf421r.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nq1tf421r"/>`,
		"fallback": "temaki:mountain-asterisk",
	});
}

export default Component;
