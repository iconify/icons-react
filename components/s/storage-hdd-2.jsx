import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gth9q0crr.css';
import '../../css/i/ia3sgrbqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gth9q0crr"/><path class="ia3sgrbqo"/>`,
		"fallback": "lineicons:storage-hdd-2",
	});
}

export default Component;
