import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i4zyklb7k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i4zyklb7k"/>`,
		"fallback": "famicons:options-sharp",
	});
}

export default Component;
