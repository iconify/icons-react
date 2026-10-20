import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpjqvnoqu.css';
import '../../css/v/vgkf1kbba.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wpjqvnoqu"/><path class="vgkf1kbba"/>`,
		"fallback": "energy-icons:tab-key-48-bold",
	});
}

export default Component;
