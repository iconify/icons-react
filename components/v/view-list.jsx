import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qcm6aifgn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qcm6aifgn"/>`,
		"fallback": "humbleicons:view-list",
	});
}

export default Component;
