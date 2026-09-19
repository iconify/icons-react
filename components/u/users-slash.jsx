import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3l31-4do.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b3l31-4do"/>`,
		"fallback": "fa6-solid:users-slash",
	});
}

export default Component;
