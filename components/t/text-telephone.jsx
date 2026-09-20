import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhtl3hy3s.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhtl3hy3s"/>`,
		"fallback": "medical-icon:text-telephone",
	});
}

export default Component;
