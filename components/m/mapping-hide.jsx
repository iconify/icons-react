import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndyg946ck.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ndyg946ck"/>`,
		"fallback": "carbon:mapping-hide",
	});
}

export default Component;
