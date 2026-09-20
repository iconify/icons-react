import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hb0hgobzl.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hb0hgobzl"/>`,
		"fallback": "pinhead:water-standpipe-with-pump-handle-and-drinking-glass",
	});
}

export default Component;
