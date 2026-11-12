import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/puvlzwowv.css';
import '../../css/k/k8ay144-h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="puvlzwowv"/><path class="k8ay144-h"/>`,
		"fallback": "selfhst:reitti-light",
	});
}

export default Component;
