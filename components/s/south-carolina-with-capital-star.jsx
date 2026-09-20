import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_h4-1b1d.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t_h4-1b1d"/>`,
		"fallback": "pinhead:south-carolina-with-capital-star",
	});
}

export default Component;
