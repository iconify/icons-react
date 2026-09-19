import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ondqgb3it.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ondqgb3it"/>`,
		"fallback": "cryptocurrency:mln",
	});
}

export default Component;
