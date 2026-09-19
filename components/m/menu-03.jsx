import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxuprlavv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxuprlavv"/>`,
		"fallback": "hugeicons:menu-03",
	});
}

export default Component;
