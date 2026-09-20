import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ir-wcidyj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ir-wcidyj"/>`,
		"fallback": "pajamas:push-rules",
	});
}

export default Component;
