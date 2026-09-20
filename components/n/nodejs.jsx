import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dope4ccwn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dope4ccwn"/>`,
		"fallback": "raphael:nodejs",
	});
}

export default Component;
