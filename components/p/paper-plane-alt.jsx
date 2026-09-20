import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2q2m8bvc.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2q2m8bvc"/>`,
		"fallback": "system-uicons:paper-plane-alt",
	});
}

export default Component;
