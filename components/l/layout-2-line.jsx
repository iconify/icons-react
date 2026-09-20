import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z29ng0f6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z29ng0f6r"/>`,
		"fallback": "ri:layout-2-line",
	});
}

export default Component;
