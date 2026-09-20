import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_n3habvv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_n3habvv"/>`,
		"fallback": "octicon:server-16",
	});
}

export default Component;
