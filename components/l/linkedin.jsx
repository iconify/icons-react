import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_a-jbcwn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_a-jbcwn"/>`,
		"fallback": "streamline:linkedin",
	});
}

export default Component;
