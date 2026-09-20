import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrifdgdzx.css';

const viewBox = {"width":14,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrifdgdzx"/>`,
		"fallback": "octicon:mail-read",
	});
}

export default Component;
