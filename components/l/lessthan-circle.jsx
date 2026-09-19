import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9eiv2zbz.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9eiv2zbz"/>`,
		"fallback": "f7:lessthan-circle",
	});
}

export default Component;
