import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p777b5bsc.css';
import '../../css/i/iic8aijvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p777b5bsc"/><path class="iic8aijvm"/>`,
		"fallback": "uim:intercom",
	});
}

export default Component;
