import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g07yztbkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g07yztbkl"/>`,
		"fallback": "ri:markup-fill",
	});
}

export default Component;
