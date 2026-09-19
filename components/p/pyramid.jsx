import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rg640xb8g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rg640xb8g"/>`,
		"fallback": "at-icons:pyramid",
	});
}

export default Component;
