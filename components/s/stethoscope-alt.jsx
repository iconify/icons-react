import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oq01djb0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oq01djb0d"/>`,
		"fallback": "uis:stethoscope-alt",
	});
}

export default Component;
