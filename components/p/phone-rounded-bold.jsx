import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqwhw4b4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqwhw4b4a"/>`,
		"fallback": "solar:phone-rounded-bold",
	});
}

export default Component;
