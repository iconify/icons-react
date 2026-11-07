import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nayqy1c_r.css';
import '../../css/h/h0p33jbfv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nayqy1c_r"/><path class="h0p33jbfv"/>`,
		"fallback": "solar:table-bold-duotone",
	});
}

export default Component;
