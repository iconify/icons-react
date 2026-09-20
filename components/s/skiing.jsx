import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yi2_bml3j.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yi2_bml3j"/>`,
		"fallback": "map:skiing",
	});
}

export default Component;
