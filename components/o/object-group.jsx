import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/esv2aeb_b.css';
import '../../css/g/g0ixy-bau.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="esv2aeb_b"/><path class="g0ixy-bau"/>`,
		"fallback": "cil:object-group",
	});
}

export default Component;
