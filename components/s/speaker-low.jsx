import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owxqd0bmk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owxqd0bmk"/>`,
		"fallback": "at-icons:speaker-low",
	});
}

export default Component;
