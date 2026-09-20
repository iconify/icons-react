import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qy35efbet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qy35efbet"/>`,
		"fallback": "si:octagon-check-line",
	});
}

export default Component;
