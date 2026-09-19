import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gz0dibbrl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gz0dibbrl"/>`,
		"fallback": "griddy-icons:lock-alt-01",
	});
}

export default Component;
