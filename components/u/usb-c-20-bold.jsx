import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/itqentznz.css';
import '../../css/l/l_y65ob0n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="itqentznz"/><path class="l_y65ob0n"/>`,
		"fallback": "energy-icons:usb-c-20-bold",
	});
}

export default Component;
