import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/limzqubuc.css';
import '../../css/a/ar6xy1boo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="limzqubuc"/><path class="ar6xy1boo"/>`,
		"fallback": "vaadin:user-heart",
	});
}

export default Component;
