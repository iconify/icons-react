import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyx2mnb1e.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dyx2mnb1e"/>`,
		"fallback": "pinhead:north-dakota-with-capital-star",
	});
}

export default Component;
