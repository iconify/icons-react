import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ox1-hbb9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ox1-hbb9k"/>`,
		"fallback": "heroicons:underline",
	});
}

export default Component;
