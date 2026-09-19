import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tah160b_e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tah160b_e"/>`,
		"fallback": "healthicons:mask",
	});
}

export default Component;
