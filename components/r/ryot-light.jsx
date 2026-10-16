import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pufzx1blr.css';

const viewBox = {"width":440.71,"height":440.63,"left":36.13,"top":36.34};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pufzx1blr"/>`,
		"fallback": "thesvg-color:ryot-light",
	});
}

export default Component;
