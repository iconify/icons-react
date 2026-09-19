import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6w734d5i.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6w734d5i"/>`,
		"fallback": "f7:smallcircle-fill-circle-fill",
	});
}

export default Component;
