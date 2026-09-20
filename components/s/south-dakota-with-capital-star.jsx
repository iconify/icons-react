import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hl551cj4p.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hl551cj4p"/>`,
		"fallback": "pinhead:south-dakota-with-capital-star",
	});
}

export default Component;
