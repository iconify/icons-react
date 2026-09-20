import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t--a6rbsb.css';
import '../../css/r/r1oc-kbvk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t--a6rbsb"/><path class="r1oc-kbvk"/>`,
		"fallback": "token:para",
	});
}

export default Component;
