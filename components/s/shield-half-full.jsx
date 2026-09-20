import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtc8-gbkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtc8-gbkn"/>`,
		"fallback": "mdi:shield-half-full",
	});
}

export default Component;
