import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ol_yukdmc.css';
import '../../css/t/tk2f-4kpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ol_yukdmc"/><path class="tk2f-4kpx"/>`,
		"fallback": "lineicons:pizza-2",
	});
}

export default Component;
