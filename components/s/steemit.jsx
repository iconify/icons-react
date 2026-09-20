import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/op2gj8b4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="op2gj8b4n"/>`,
		"fallback": "simple-icons:steemit",
	});
}

export default Component;
