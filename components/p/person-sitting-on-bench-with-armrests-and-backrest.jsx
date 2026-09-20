import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/on1pytb8v.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="on1pytb8v"/>`,
		"fallback": "pinhead:person-sitting-on-bench-with-armrests-and-backrest",
	});
}

export default Component;
