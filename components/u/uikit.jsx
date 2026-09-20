import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aj7k5cndy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aj7k5cndy"/>`,
		"fallback": "thesvg-color:uikit",
	});
}

export default Component;
