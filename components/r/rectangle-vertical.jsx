import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o0hd-6bnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="o0hd-6bnr"/>`,
		"fallback": "lucide:rectangle-vertical",
	});
}

export default Component;
