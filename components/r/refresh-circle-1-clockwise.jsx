import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smi-2nbap.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smi-2nbap"/>`,
		"fallback": "lineicons:refresh-circle-1-clockwise",
	});
}

export default Component;
