import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rl05jy16c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rl05jy16c"/>`,
		"fallback": "carbon:moonset",
	});
}

export default Component;
