import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xpmr06bhi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xpmr06bhi"/>`,
		"fallback": "ion:md-cloud",
	});
}

export default Component;
