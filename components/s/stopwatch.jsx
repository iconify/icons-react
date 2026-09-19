import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rw-b0c38h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rw-b0c38h"/>`,
		"fallback": "icomoon-free:stopwatch",
	});
}

export default Component;
