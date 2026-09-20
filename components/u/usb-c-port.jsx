import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vslz5yb3q.css';
import '../../css/z/ztwblqbdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vslz5yb3q"/><rect class="ztwblqbdz"/></g>`,
		"fallback": "lucide:usb-c-port",
	});
}

export default Component;
