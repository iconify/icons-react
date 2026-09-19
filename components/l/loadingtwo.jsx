import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zv5m55j0s.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zv5m55j0s"/>`,
		"fallback": "whh:loadingtwo",
	});
}

export default Component;
