import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gw41_qb9r.css';
import '../../css/o/o0vpernrl.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gw41_qb9r"/><path class="o0vpernrl"/>`,
		"fallback": "lineicons:map-marker",
	});
}

export default Component;
