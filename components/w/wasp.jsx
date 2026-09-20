import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-g6zlbjc.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-g6zlbjc"/>`,
		"fallback": "picon:wasp",
	});
}

export default Component;
