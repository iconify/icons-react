import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0pl5fbue.css';
import '../../css/h/h-67_2kzm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0pl5fbue"/><path clip-rule="evenodd" class="h-67_2kzm"/>`,
		"fallback": "qlementine-icons:tom-24",
	});
}

export default Component;
