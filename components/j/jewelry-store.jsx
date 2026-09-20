import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4-2dczzv.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u4-2dczzv"/>`,
		"fallback": "temaki:jewelry-store",
	});
}

export default Component;
