import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yx55xbbbo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yx55xbbbo"/>`,
		"fallback": "cryptocurrency:leo",
	});
}

export default Component;
