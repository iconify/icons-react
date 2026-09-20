import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/crs964q4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="crs964q4p"/>`,
		"fallback": "streamline-ultimate:saving-bank-1-bold",
	});
}

export default Component;
