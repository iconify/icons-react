import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zugv0mu1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zugv0mu1b"/>`,
		"fallback": "reicon:skip-prev-filled",
	});
}

export default Component;
