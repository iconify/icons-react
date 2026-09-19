import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ips20vbvf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ips20vbvf"/>`,
		"fallback": "carbon:triangle-solid",
	});
}

export default Component;
