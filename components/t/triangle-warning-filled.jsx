import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhn31wqfx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qhn31wqfx"/>`,
		"fallback": "lsicon:triangle-warning-filled",
	});
}

export default Component;
