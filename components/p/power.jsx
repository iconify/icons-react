import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqoa4bb0h.css';

const viewBox = {"width":432,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zqoa4bb0h"/>`,
		"fallback": "ps:power",
	});
}

export default Component;
