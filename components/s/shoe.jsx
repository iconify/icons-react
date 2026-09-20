import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xqwjfhd0e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xqwjfhd0e"/>`,
		"fallback": "roentgen:shoe",
	});
}

export default Component;
