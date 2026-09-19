import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oegn2i95m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oegn2i95m"/>`,
		"fallback": "carbon:send",
	});
}

export default Component;
