import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2y2-bbea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q2y2-bbea"/>`,
		"fallback": "mdi:road-variant",
	});
}

export default Component;
