import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qw78bx2nm.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qw78bx2nm"/>`,
		"fallback": "fa-solid:money-bill",
	});
}

export default Component;
