import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smcilub_l.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smcilub_l"/>`,
		"fallback": "system-uicons:video",
	});
}

export default Component;
