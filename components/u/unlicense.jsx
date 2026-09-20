import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/akfwbz7gg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="akfwbz7gg"/>`,
		"fallback": "material-icon-theme:unlicense",
	});
}

export default Component;
