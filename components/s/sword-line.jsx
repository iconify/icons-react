import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sy3m-2b8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sy3m-2b8x"/>`,
		"fallback": "ri:sword-line",
	});
}

export default Component;
