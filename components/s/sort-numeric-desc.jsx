import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wp-g37biw.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wp-g37biw"/>`,
		"fallback": "fa7-solid:sort-numeric-desc",
	});
}

export default Component;
