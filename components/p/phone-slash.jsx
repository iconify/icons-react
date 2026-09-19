import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5p1ufkjr.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5p1ufkjr"/>`,
		"fallback": "fa6-solid:phone-slash",
	});
}

export default Component;
