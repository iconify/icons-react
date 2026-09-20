import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a21x_b8wq.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a21x_b8wq"/>`,
		"fallback": "picon:pin",
	});
}

export default Component;
