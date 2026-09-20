import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a36d3kanx.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a36d3kanx"/>`,
		"fallback": "thesvg:realm",
	});
}

export default Component;
