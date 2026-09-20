import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fw9y5ibzh.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fw9y5ibzh"/>`,
		"fallback": "picon:lego",
	});
}

export default Component;
