import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxolw7z3i.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxolw7z3i"/>`,
		"fallback": "map:veterinary-care",
	});
}

export default Component;
