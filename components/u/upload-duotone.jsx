import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/evpekyz3z.css';
import '../../css/j/jh1pe0bqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="evpekyz3z"/><path class="jh1pe0bqd"/></g>`,
		"fallback": "keyline-icons:upload-duotone",
	});
}

export default Component;
