import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwnjo2bcw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwnjo2bcw"/>`,
		"fallback": "mdi:tally-mark-2",
	});
}

export default Component;
