import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxc_0cc_z.css';
import '../../css/c/c47zhrbrd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxc_0cc_z"/><path class="c47zhrbrd"/>`,
		"fallback": "vaadin:user-check",
	});
}

export default Component;
