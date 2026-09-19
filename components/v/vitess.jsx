import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1etf0byp.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v1etf0byp"/>`,
		"fallback": "devicon-plain:vitess",
	});
}

export default Component;
