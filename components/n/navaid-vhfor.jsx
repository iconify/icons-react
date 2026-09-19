import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vg_ct5bjf.css';
import '../../css/e/es579g_1w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vg_ct5bjf"/><path class="es579g_1w"/>`,
		"fallback": "carbon:navaid-vhfor",
	});
}

export default Component;
