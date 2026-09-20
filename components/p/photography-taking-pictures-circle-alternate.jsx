import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezcxgba8y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezcxgba8y"/>`,
		"fallback": "streamline-pixel:photography-taking-pictures-circle-alternate",
	});
}

export default Component;
