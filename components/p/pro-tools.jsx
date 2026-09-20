import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndutxd_0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ndutxd_0j"/>`,
		"fallback": "thesvg:pro-tools",
	});
}

export default Component;
