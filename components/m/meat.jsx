import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l6lmsxb0c.css';
import '../../css/t/thp3xzwhd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l6lmsxb0c"/><path class="thp3xzwhd"/>`,
		"fallback": "boxicons:meat",
	});
}

export default Component;
