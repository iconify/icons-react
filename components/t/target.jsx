import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_7q0zb-s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z_7q0zb-s"/>`,
		"fallback": "ps:target",
	});
}

export default Component;
