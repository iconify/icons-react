import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjauk9b6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wjauk9b6y"/>`,
		"fallback": "token:mmpro",
	});
}

export default Component;
