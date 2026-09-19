import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w95g0dfgy.css';

const viewBox = {"width":472,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w95g0dfgy"/>`,
		"fallback": "ps:spotify",
	});
}

export default Component;
