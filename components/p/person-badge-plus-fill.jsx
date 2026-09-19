import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fn_w55smn.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fn_w55smn"/>`,
		"fallback": "f7:person-badge-plus-fill",
	});
}

export default Component;
