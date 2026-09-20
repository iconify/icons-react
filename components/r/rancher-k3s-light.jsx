import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjsav6i6d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjsav6i6d"/>`,
		"fallback": "selfhst:rancher-k3s-light",
	});
}

export default Component;
