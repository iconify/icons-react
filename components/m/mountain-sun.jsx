import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxmr28b3g.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxmr28b3g"/>`,
		"fallback": "fa7-solid:mountain-sun",
	});
}

export default Component;
