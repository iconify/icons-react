import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zb0u2kbzg.css';
import '../../css/t/t-m8w0bde.css';
import '../../css/l/l1ws3p1do.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zb0u2kbzg"/><path class="t-m8w0bde"/><path class="l1ws3p1do"/>`,
		"fallback": "energy-icons:spray-can-20",
	});
}

export default Component;
