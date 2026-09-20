import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rm0iz-wcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rm0iz-wcq"/>`,
		"fallback": "ri:layout-top-line",
	});
}

export default Component;
