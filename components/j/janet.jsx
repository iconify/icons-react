import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fes3r4mpx.css';

const viewBox = {"width":455,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fes3r4mpx"/>`,
		"fallback": "file-icons:janet",
	});
}

export default Component;
