import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ura6pn2-n.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ura6pn2-n"/>`,
		"fallback": "lineicons:mouse",
	});
}

export default Component;
