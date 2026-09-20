import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3_5w4bks.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3_5w4bks"/>`,
		"fallback": "medical-icon:smoking",
	});
}

export default Component;
