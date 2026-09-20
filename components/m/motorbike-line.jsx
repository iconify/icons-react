import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sof3dcy3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sof3dcy3h"/>`,
		"fallback": "ri:motorbike-line",
	});
}

export default Component;
