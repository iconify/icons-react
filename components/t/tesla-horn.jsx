import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncb6-0bom.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ncb6-0bom"/>`,
		"fallback": "cbi:tesla-horn",
	});
}

export default Component;
