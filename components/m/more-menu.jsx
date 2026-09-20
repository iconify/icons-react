import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/or_6jdb6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="or_6jdb6i"/>`,
		"fallback": "majesticons:more-menu",
	});
}

export default Component;
