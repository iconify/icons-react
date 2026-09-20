import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0g1-0_hw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0g1-0_hw"/>`,
		"fallback": "pinhead:taxi-under-wrench",
	});
}

export default Component;
