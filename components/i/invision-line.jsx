import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjzvqj5xj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pjzvqj5xj"/>`,
		"fallback": "ri:invision-line",
	});
}

export default Component;
