import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jus8-bbxs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jus8-bbxs"/>`,
		"fallback": "cryptocurrency:music",
	});
}

export default Component;
