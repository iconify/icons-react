import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ppivl6_do.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ppivl6_do"/>`,
		"fallback": "pinhead:m",
	});
}

export default Component;
