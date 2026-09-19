import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wo4uwlb_d.css';

const viewBox = {"width":1152,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wo4uwlb_d"/>`,
		"fallback": "fa:unlock-alt",
	});
}

export default Component;
