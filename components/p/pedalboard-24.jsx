import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/te0jk3ack.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="te0jk3ack"/>`,
		"fallback": "qlementine-icons:pedalboard-24",
	});
}

export default Component;
