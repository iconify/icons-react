import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a8ubwnbjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a8ubwnbjy"/>`,
		"fallback": "boxicons:merge",
	});
}

export default Component;
