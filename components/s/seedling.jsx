import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jb5dbo-6m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jb5dbo-6m"/>`,
		"fallback": "fxemoji:seedling",
	});
}

export default Component;
