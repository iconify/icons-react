import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9s5ssbnc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m9s5ssbnc"/>`,
		"fallback": "at-icons:unlock",
	});
}

export default Component;
