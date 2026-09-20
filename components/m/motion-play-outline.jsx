import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzn4iv5xp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzn4iv5xp"/>`,
		"fallback": "mdi:motion-play-outline",
	});
}

export default Component;
