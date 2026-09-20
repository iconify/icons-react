import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhwhbdcmq.css';
import '../../css/x/x_z5bwewf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhwhbdcmq"/><path class="x_z5bwewf"/>`,
		"fallback": "selfhst:openlist",
	});
}

export default Component;
