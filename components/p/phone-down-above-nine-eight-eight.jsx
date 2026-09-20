import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eau72fb-j.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eau72fb-j"/>`,
		"fallback": "pinhead:phone-down-above-nine-eight-eight",
	});
}

export default Component;
