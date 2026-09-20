import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eahhtsb9a.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eahhtsb9a"/>`,
		"fallback": "pinhead:sign-beside-bench-with-backrest",
	});
}

export default Component;
