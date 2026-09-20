import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/erxn25bjx.css';

const viewBox = {"width":33,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="erxn25bjx"/>`,
		"fallback": "thesvg-color:nova-aws",
	});
}

export default Component;
