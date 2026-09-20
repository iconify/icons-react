import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dar1jw_ew.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dar1jw_ew"/>`,
		"fallback": "pinhead:michigan-with-capital-star",
	});
}

export default Component;
