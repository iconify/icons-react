import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljycq4b6e.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljycq4b6e"/>`,
		"fallback": "f7:person-3",
	});
}

export default Component;
