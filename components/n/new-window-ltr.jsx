import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrm89iuuq.css';
import '../../css/k/k7rihbbue.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hrm89iuuq"/><path class="k7rihbbue"/>`,
		"fallback": "ooui:new-window-ltr",
	});
}

export default Component;
