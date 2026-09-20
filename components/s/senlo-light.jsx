import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/prmy9wtgl.css';
import '../../css/m/miwt5_b7t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="prmy9wtgl"/><path class="miwt5_b7t"/>`,
		"fallback": "selfhst:senlo-light",
	});
}

export default Component;
