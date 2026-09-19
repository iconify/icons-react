import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hst7d2bjq.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hst7d2bjq"/>`,
		"fallback": "fa7-solid:skiing",
	});
}

export default Component;
