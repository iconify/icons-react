import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrvc_wb8g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rrvc_wb8g"/>`,
		"fallback": "pajamas:merge-request",
	});
}

export default Component;
