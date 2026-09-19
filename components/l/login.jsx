import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzx31b0pu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzx31b0pu"/>`,
		"fallback": "fe:login",
	});
}

export default Component;
