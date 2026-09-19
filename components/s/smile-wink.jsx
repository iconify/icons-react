import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ikzqlv-ka.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ikzqlv-ka"/>`,
		"fallback": "fa-regular:smile-wink",
	});
}

export default Component;
