import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kre0tmbgq.css';
import '../../css/v/v18c9fbau.css';
import '../../css/z/z8ps-b1jm.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kre0tmbgq"/><path class="v18c9fbau"/><path class="z8ps-b1jm"/>`,
		"fallback": "flag:lu-4x3",
	});
}

export default Component;
