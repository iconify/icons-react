import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myetzitsr.css';
import '../../css/f/f46ywubav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="myetzitsr"/><path class="f46ywubav"/>`,
		"fallback": "token:swap",
	});
}

export default Component;
