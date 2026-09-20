import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tigx9-xcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tigx9-xcl"/>`,
		"fallback": "lucide:test-tubes",
	});
}

export default Component;
