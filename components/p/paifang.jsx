import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5d9xcp3e.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5d9xcp3e"/>`,
		"fallback": "temaki:paifang",
	});
}

export default Component;
