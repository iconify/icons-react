import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndsum8b_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ndsum8b_o"/>`,
		"fallback": "streamline-ultimate:volleyball-net-bold",
	});
}

export default Component;
