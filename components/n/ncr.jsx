import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7un7q-3o.css';
import '../../css/p/p8sne4bcm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s7un7q-3o"/><path clip-rule="evenodd" class="p8sne4bcm"/>`,
		"fallback": "token:ncr",
	});
}

export default Component;
