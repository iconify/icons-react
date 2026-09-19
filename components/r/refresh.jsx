import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/of-adsbxh.css';

const viewBox = {"width":631,"height":718};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="of-adsbxh"/>`,
		"fallback": "ls:refresh",
	});
}

export default Component;
