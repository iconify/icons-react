import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukj9idxuf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukj9idxuf"/>`,
		"fallback": "iconamoon:sign-pi-light",
	});
}

export default Component;
