import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hk46n0o3m.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hk46n0o3m"/>`,
		"fallback": "fa6-solid:laptop-code",
	});
}

export default Component;
