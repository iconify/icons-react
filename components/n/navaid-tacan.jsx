import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czwmjhe3n.css';
import '../../css/y/yv8w4bckf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="czwmjhe3n"/><path class="yv8w4bckf"/>`,
		"fallback": "carbon:navaid-tacan",
	});
}

export default Component;
