import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bltugjkhs.css';
import '../../css/v/vq3qgrprl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bltugjkhs"/><path class="vq3qgrprl"/>`,
		"fallback": "selfhst:unregistry",
	});
}

export default Component;
