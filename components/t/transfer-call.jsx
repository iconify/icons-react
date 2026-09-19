import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egkeg1bxt.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="egkeg1bxt"/>`,
		"fallback": "fluent-mdl2:transfer-call",
	});
}

export default Component;
