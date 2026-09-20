import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x87xc3biz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x87xc3biz"/>`,
		"fallback": "selfhst:stackspin-dark",
	});
}

export default Component;
