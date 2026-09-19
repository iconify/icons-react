import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ueo529fdc.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ueo529fdc"/>`,
		"fallback": "zmdi:settings-square",
	});
}

export default Component;
