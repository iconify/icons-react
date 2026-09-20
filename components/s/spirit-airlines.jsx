import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kl3jjbtxm.css';
import '../../css/e/ej_-dh--d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kl3jjbtxm"/><path class="ej_-dh--d"/>`,
		"fallback": "selfhst:spirit-airlines",
	});
}

export default Component;
