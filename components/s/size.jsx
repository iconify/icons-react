import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3q134bfl.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y3q134bfl"/>`,
		"fallback": "radix-icons:size",
	});
}

export default Component;
