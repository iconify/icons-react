import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhc-4dsnx.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jhc-4dsnx"/>`,
		"fallback": "dinkie-icons:money-bag-small",
	});
}

export default Component;
