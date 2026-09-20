import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d086xn42g.css';

const viewBox = {"width":77.258,"height":4.867};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d086xn42g"/>`,
		"fallback": "thesvg-color:lucid-motors",
	});
}

export default Component;
