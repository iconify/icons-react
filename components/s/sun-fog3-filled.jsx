import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywkte3b8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywkte3b8x"/>`,
		"fallback": "reicon:sun-fog3-filled",
	});
}

export default Component;
