import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3yu_1dgl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y3yu_1dgl"/>`,
		"fallback": "streamline-logos:renren-logo-1-solid",
	});
}

export default Component;
