import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/us6dxlbtt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="us6dxlbtt"/>`,
		"fallback": "streamline:tinder-solid",
	});
}

export default Component;
