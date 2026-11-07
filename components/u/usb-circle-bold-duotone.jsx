import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgkj53bit.css';
import '../../css/e/ewpaxfbsm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cgkj53bit"/><path class="ewpaxfbsm"/>`,
		"fallback": "solar:usb-circle-bold-duotone",
	});
}

export default Component;
