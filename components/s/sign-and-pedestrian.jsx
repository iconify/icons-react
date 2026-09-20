import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/funp-8bnr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="funp-8bnr"/>`,
		"fallback": "temaki:sign-and-pedestrian",
	});
}

export default Component;
