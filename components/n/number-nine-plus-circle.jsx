import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ee10w_8jp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ee10w_8jp"/>`,
		"fallback": "mdi:number-nine-plus-circle",
	});
}

export default Component;
