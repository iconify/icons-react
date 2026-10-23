import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rl4i8_zfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rl4i8_zfy"/>`,
		"fallback": "vadivam:thermometer-sun",
	});
}

export default Component;
