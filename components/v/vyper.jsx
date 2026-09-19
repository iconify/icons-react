import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_zk3-m4o.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_zk3-m4o"/>`,
		"fallback": "devicon:vyper",
	});
}

export default Component;
