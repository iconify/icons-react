import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o5_8e0yrq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o5_8e0yrq"/>`,
		"fallback": "token:wallet-connect",
	});
}

export default Component;
