import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uak_0hbas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uak_0hbas"/>`,
		"fallback": "solar:radial-blur-bold",
	});
}

export default Component;
