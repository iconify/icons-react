import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxhip6iyq.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxhip6iyq"/>`,
		"fallback": "fa7-solid:laptop-code",
	});
}

export default Component;
