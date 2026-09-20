import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0eiufg9b.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0eiufg9b"/>`,
		"fallback": "picon:test",
	});
}

export default Component;
