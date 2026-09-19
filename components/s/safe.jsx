import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/osua4ybwt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="osua4ybwt"/>`,
		"fallback": "cryptocurrency:safe",
	});
}

export default Component;
