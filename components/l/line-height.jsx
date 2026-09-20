import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svb_ag-kk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="svb_ag-kk"/>`,
		"fallback": "radix-icons:line-height",
	});
}

export default Component;
