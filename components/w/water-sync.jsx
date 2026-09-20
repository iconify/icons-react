import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cisfx-aim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cisfx-aim"/>`,
		"fallback": "mdi:water-sync",
	});
}

export default Component;
