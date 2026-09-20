import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqg85fbuk.css';
import '../../css/e/e-sveq-za.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqg85fbuk"/><circle class="e-sveq-za"/>`,
		"fallback": "ooui:robot",
	});
}

export default Component;
