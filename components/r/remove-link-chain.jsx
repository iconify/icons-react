import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-w5v9dxl.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-w5v9dxl"/>`,
		"fallback": "fluent-mdl2:remove-link-chain",
	});
}

export default Component;
