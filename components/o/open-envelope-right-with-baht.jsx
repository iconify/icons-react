import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p3jht202b.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p3jht202b"/>`,
		"fallback": "pinhead:open-envelope-right-with-baht",
	});
}

export default Component;
