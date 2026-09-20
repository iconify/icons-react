import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dr0pwhdae.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dr0pwhdae"/>`,
		"fallback": "pinhead:oregon-with-capital-star",
	});
}

export default Component;
