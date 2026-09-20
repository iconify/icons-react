import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ic9-wxsjk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ic9-wxsjk"/>`,
		"fallback": "temaki:lounging",
	});
}

export default Component;
