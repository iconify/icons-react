import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1d3wbwag.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v1d3wbwag"/>`,
		"fallback": "f7:logo-ios",
	});
}

export default Component;
