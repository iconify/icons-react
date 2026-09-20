import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uoqz64bni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uoqz64bni"/>`,
		"fallback": "mdi:sleep-off",
	});
}

export default Component;
