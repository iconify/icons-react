import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2w8fkt6o.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w2w8fkt6o"/>`,
		"fallback": "pinhead:phone-down-above-one-two-three",
	});
}

export default Component;
