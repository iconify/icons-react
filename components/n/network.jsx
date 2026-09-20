import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agzafq8wu.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agzafq8wu"/>`,
		"fallback": "picon:network",
	});
}

export default Component;
