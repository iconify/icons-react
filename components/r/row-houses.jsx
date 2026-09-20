import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzky8c53b.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jzky8c53b"/>`,
		"fallback": "pinhead:row-houses",
	});
}

export default Component;
