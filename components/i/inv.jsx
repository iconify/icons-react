import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/noh1fb71d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="noh1fb71d"/>`,
		"fallback": "token:inv",
	});
}

export default Component;
