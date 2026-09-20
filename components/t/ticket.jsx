import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zueuiwlmn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zueuiwlmn"/>`,
		"fallback": "lucide:ticket",
	});
}

export default Component;
