import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pksp8bbov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pksp8bbov"/>`,
		"fallback": "mdi:podium-third",
	});
}

export default Component;
