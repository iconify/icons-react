import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kboz2db7e.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kboz2db7e"/>`,
		"fallback": "pinhead:p-wide",
	});
}

export default Component;
