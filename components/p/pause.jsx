import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbfp1yoag.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbfp1yoag"/>`,
		"fallback": "memory:pause",
	});
}

export default Component;
