import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vh1r0w9jv.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vh1r0w9jv"/>`,
		"fallback": "temaki:pickleball",
	});
}

export default Component;
