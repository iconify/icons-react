import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t24_l9b7b.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t24_l9b7b"/>`,
		"fallback": "fa7-solid:toilet-paper-slash",
	});
}

export default Component;
