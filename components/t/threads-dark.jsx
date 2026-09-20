import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ih9_-c6ca.css';

const viewBox = {"width":192,"height":192};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ih9_-c6ca x19hqcy"/>`,
		"fallback": "thesvg-color:threads-dark",
	});
}

export default Component;
