import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnb90nbxf.css';
import '../../css/c/ckjjtzq8w.css';
import '../../css/l/lab2lbc5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnb90nbxf"/><path class="ckjjtzq8w"/><path class="lab2lbc5s"/>`,
		"fallback": "solar:round-transfer-horizontal-bold-duotone",
	});
}

export default Component;
