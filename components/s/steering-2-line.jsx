import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qj-ki2brv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qj-ki2brv"/>`,
		"fallback": "ri:steering-2-line",
	});
}

export default Component;
