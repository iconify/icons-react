import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uflmj6bkv.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uflmj6bkv"/>`,
		"fallback": "fa7-solid:road-lock",
	});
}

export default Component;
