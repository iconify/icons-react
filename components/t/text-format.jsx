import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2206fj4m.css';

const viewBox = {"width":304,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t2206fj4m"/>`,
		"fallback": "zmdi:text-format",
	});
}

export default Component;
