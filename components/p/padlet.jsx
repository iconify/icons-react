import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzx64zf2u.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jzx64zf2u"/>`,
		"fallback": "fa7-brands:padlet",
	});
}

export default Component;
