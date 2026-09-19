import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exv3ojb0v.css';
import '../../css/s/sdocp_b4u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="exv3ojb0v"/><path class="sdocp_b4u"/>`,
		"fallback": "famicons:logo-vue",
	});
}

export default Component;
