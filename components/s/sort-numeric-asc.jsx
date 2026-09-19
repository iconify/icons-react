import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avw58lqaf.css';

const viewBox = {"width":1472,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avw58lqaf"/>`,
		"fallback": "fa:sort-numeric-asc",
	});
}

export default Component;
