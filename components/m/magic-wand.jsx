import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tryux6b1w.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tryux6b1w"/>`,
		"fallback": "simple-line-icons:magic-wand",
	});
}

export default Component;
