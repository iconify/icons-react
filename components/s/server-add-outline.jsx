import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpwy8-brx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpwy8-brx"/>`,
		"fallback": "mdi:server-add-outline",
	});
}

export default Component;
