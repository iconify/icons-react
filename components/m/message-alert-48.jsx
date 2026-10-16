import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/me-xmbmth.css';
import '../../css/y/y9kkxnfah.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="me-xmbmth"/><path class="y9kkxnfah"/>`,
		"fallback": "energy-icons:message-alert-48",
	});
}

export default Component;
