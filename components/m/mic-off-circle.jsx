import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zq9e1ac5g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zq9e1ac5g"/>`,
		"fallback": "famicons:mic-off-circle",
	});
}

export default Component;
