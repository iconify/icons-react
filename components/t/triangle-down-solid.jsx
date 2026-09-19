import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwc4woboc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vwc4woboc"/>`,
		"fallback": "carbon:triangle-down-solid",
	});
}

export default Component;
