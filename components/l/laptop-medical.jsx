import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2nxf_b8n.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t2nxf_b8n"/>`,
		"fallback": "fa6-solid:laptop-medical",
	});
}

export default Component;
