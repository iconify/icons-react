import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f8khk_4lc.css';

const viewBox = {"width":506,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f8khk_4lc"/>`,
		"fallback": "file-icons:silicongraphics",
	});
}

export default Component;
