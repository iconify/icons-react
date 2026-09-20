import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfmze4bhs.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfmze4bhs"/>`,
		"fallback": "radix-icons:lap-timer",
	});
}

export default Component;
