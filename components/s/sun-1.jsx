import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqgkd6bzu.css';
import '../../css/s/sfxmahbnd.css';
import '../../css/q/q2-uphbzn.css';

const viewBox = {"width":25,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqgkd6bzu"/><path clip-rule="evenodd" class="sfxmahbnd"/><path class="q2-uphbzn"/>`,
		"fallback": "lineicons:sun-1",
	});
}

export default Component;
