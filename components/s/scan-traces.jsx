import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ltw3g9bcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ltw3g9bcp"/>`,
		"fallback": "tabler:scan-traces",
	});
}

export default Component;
