import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvw-7lb3m.css';

const viewBox = {"width":472,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvw-7lb3m"/>`,
		"fallback": "zmdi:smartphone-landscape-lock",
	});
}

export default Component;
