import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjss37bll.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sjss37bll"/>`,
		"fallback": "fa7-solid:rainbow",
	});
}

export default Component;
