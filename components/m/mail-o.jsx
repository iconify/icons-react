import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tt6kw6_7q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tt6kw6_7q"/>`,
		"fallback": "uiw:mail-o",
	});
}

export default Component;
