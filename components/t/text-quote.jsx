import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7e-4kxuu.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7e-4kxuu"/>`,
		"fallback": "f7:text-quote",
	});
}

export default Component;
