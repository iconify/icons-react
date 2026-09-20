import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bun4fvbdj.css';
import '../../css/k/ky_2mwb6d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bun4fvbdj"/><path class="ky_2mwb6d"/>`,
		"fallback": "selfhst:netvisor",
	});
}

export default Component;
