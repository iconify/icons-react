import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3308_fmz.css';
import '../../css/e/e2itionyx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3308_fmz"/><path class="e2itionyx"/>`,
		"fallback": "boxicons:scan-barcode-filled",
	});
}

export default Component;
