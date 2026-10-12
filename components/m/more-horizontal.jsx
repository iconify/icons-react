import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/am0rq6bcn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="am0rq6bcn"/>`,
		"fallback": "andrsrxn:more-horizontal",
	});
}

export default Component;
