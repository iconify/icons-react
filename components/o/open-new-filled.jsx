import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8mx9__7v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s8mx9__7v"/>`,
		"fallback": "lsicon:open-new-filled",
	});
}

export default Component;
