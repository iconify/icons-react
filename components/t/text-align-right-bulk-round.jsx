import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/en9t1ybbw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="en9t1ybbw"/>`,
		"fallback": "coolicons:text-align-right-bulk-round",
	});
}

export default Component;
