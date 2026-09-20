import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lo1il0bwr.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lo1il0bwr"/>`,
		"fallback": "picon:na",
	});
}

export default Component;
