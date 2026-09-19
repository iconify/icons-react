import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zbn1t2yzh.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zbn1t2yzh"/>`,
		"fallback": "fa7-solid:sign-out",
	});
}

export default Component;
