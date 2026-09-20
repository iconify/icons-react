import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkbqpoy8k.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkbqpoy8k"/>`,
		"fallback": "pinhead:phone-down-above-711",
	});
}

export default Component;
