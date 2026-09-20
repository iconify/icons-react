import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bugl1cbsm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bugl1cbsm"/>`,
		"fallback": "ri:live-line",
	});
}

export default Component;
