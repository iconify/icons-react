import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myx9f4b_l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="myx9f4b_l"/>`,
		"fallback": "lsicon:linecap-butt-filled",
	});
}

export default Component;
