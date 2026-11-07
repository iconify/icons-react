import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u41r5aczw.css';
import '../../css/u/umyvzfuaq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u41r5aczw"/><path class="umyvzfuaq"/>`,
		"fallback": "solar:question-mark-outline",
	});
}

export default Component;
