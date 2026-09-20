import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jj3iep4cf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jj3iep4cf"/>`,
		"fallback": "simple-icons:powerautomate",
	});
}

export default Component;
