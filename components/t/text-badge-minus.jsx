import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h__prbc9p.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h__prbc9p"/>`,
		"fallback": "f7:text-badge-minus",
	});
}

export default Component;
