import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkdf4u1mn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkdf4u1mn"/>`,
		"fallback": "lsicon:sales-return-outline",
	});
}

export default Component;
