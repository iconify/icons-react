import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mg4ykbbkq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mg4ykbbkq"/>`,
		"fallback": "carbon:rotate-clockwise-filled",
	});
}

export default Component;
