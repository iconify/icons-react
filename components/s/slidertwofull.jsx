import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c1gy8vb3s.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c1gy8vb3s"/>`,
		"fallback": "whh:slidertwofull",
	});
}

export default Component;
