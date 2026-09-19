import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqu4ud82b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqu4ud82b"/>`,
		"fallback": "at-icons:pen-nib",
	});
}

export default Component;
