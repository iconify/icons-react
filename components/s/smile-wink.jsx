import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jr5kxzb3w.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jr5kxzb3w"/>`,
		"fallback": "fa7-regular:smile-wink",
	});
}

export default Component;
