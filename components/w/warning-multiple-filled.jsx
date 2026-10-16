import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dff48eqvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dff48eqvi"/>`,
		"fallback": "ix:warning-multiple-filled",
	});
}

export default Component;
