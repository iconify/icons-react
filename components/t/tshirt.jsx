import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rv_1nabsv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rv_1nabsv"/>`,
		"fallback": "ion:tshirt",
	});
}

export default Component;
