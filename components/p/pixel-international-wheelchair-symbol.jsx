import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-94bibkk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-94bibkk"/>`,
		"fallback": "pinhead:pixel-international-wheelchair-symbol",
	});
}

export default Component;
