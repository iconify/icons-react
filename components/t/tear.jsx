import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h69pe0k0j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h69pe0k0j"/>`,
		"fallback": "oui:tear",
	});
}

export default Component;
