import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6z9ar0tw.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o6z9ar0tw"/>`,
		"fallback": "thesvg-color:travelperk-light",
	});
}

export default Component;
