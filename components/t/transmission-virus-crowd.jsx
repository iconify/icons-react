import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/toko7hbjm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="toko7hbjm"/>`,
		"fallback": "covid:transmission-virus-crowd",
	});
}

export default Component;
