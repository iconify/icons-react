import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/rojp4pxea.css';
import '../../css/a/a91ndtnyb.css';
import '../../css/s/sqx3j0bau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="rojp4pxea"/><path class="a91ndtnyb"/><path class="sqx3j0bau wm-a"/></g>`,
		"fallback": "withicons:package",
	});
}

export default Component;
