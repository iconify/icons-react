import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvonjr_9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvonjr_9q"/>`,
		"fallback": "ri:subtract-line",
	});
}

export default Component;
