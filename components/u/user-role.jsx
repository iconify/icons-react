import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e61f3ybjn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e61f3ybjn"/>`,
		"fallback": "carbon:user-role",
	});
}

export default Component;
