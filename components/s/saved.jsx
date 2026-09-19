import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m1jtovu1o.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m1jtovu1o"/>`,
		"fallback": "dashicons:saved",
	});
}

export default Component;
