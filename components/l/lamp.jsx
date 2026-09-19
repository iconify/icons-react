import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p6-_cry7c.css';
import '../../css/m/mhc-lebus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-primary-layer p6-_cry7c"/><path class="duoicon-secondary-layer mhc-lebus"/>`,
		"fallback": "duo-icons:lamp",
	});
}

export default Component;
