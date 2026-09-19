import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ikucneb8m.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ikucneb8m"/>`,
		"fallback": "f7:wand-stars-inverse",
	});
}

export default Component;
