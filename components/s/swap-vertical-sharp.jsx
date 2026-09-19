import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d8hri9oyq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d8hri9oyq"/>`,
		"fallback": "famicons:swap-vertical-sharp",
	});
}

export default Component;
