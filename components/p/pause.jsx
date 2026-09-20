import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zv0s08bmm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zv0s08bmm"/>`,
		"fallback": "quill:pause",
	});
}

export default Component;
