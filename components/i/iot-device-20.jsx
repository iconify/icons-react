import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/onn6syb7h.css';
import '../../css/z/z6nk_cc1b.css';
import '../../css/c/c9a_4u5us.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="onn6syb7h"/><path class="z6nk_cc1b"/><path class="c9a_4u5us"/>`,
		"fallback": "energy-icons:iot-device-20",
	});
}

export default Component;
