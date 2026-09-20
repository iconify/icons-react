import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xujzs6iss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xujzs6iss"/>`,
		"fallback": "token:my-ether-wallet",
	});
}

export default Component;
