import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iahw3kbqm.css';

const viewBox = {"width":17,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iahw3kbqm"/>`,
		"fallback": "fontisto:volume-mute",
	});
}

export default Component;
