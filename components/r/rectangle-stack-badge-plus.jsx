import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gljdqbbuf.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gljdqbbuf"/>`,
		"fallback": "f7:rectangle-stack-badge-plus",
	});
}

export default Component;
