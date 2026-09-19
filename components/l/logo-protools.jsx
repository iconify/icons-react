import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xy_cr8baz.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xy_cr8baz"/>`,
		"fallback": "fad:logo-protools",
	});
}

export default Component;
