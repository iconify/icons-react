import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwtan5y3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hwtan5y3p"/>`,
		"fallback": "mdi:tor",
	});
}

export default Component;
