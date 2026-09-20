import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gu-vt6bap.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gu-vt6bap"/>`,
		"fallback": "lineicons:stethoscope-1",
	});
}

export default Component;
