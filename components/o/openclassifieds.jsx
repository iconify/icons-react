import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn72qbjmt.css';

const viewBox = {"width":1024,"height":1023};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xn72qbjmt"/>`,
		"fallback": "whh:openclassifieds",
	});
}

export default Component;
