import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/blh-xxc1n.css';
import '../../css/t/t0z_rmbuv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="blh-xxc1n"/><path class="t0z_rmbuv"/>`,
		"fallback": "carbon:microphone-filled",
	});
}

export default Component;
