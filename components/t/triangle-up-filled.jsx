import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fe27yw0co.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fe27yw0co"/>`,
		"fallback": "lsicon:triangle-up-filled",
	});
}

export default Component;
