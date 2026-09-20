import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mefg8obex.css';
import '../../css/i/ittidrwdm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mefg8obex"/><path clip-rule="evenodd" class="ittidrwdm"/>`,
		"fallback": "qlementine-icons:pedal-24",
	});
}

export default Component;
