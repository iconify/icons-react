import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ttz056v2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ttz056v2c"/>`,
		"fallback": "mdi:star-box-outline",
	});
}

export default Component;
