import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ct17tacjl.css';
import '../../css/l/l9yqfvb5c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ct17tacjl"/><path class="l9yqfvb5c"/>`,
		"fallback": "energy-icons:tent-20",
	});
}

export default Component;
