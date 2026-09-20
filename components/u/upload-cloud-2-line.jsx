import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qu5_ctb_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qu5_ctb_l"/>`,
		"fallback": "ri:upload-cloud-2-line",
	});
}

export default Component;
