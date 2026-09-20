import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h13ufob8b.css';
import '../../css/x/x3l-v8wjx.css';

const viewBox = {"width":1550,"height":971};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h13ufob8b"/><path class="x3l-v8wjx"/>`,
		"fallback": "thesvg:mondelez-international",
	});
}

export default Component;
