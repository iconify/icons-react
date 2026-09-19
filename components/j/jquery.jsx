import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h063bbb8b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h063bbb8b"/>`,
		"fallback": "cib:jquery",
	});
}

export default Component;
