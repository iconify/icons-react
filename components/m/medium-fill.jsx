import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ze8mvxbpv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ze8mvxbpv"/>`,
		"fallback": "ri:medium-fill",
	});
}

export default Component;
