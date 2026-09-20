import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrazbb12a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zrazbb12a"/>`,
		"fallback": "mdi:power-sleep",
	});
}

export default Component;
