import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc0i88y1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vc0i88y1x"/>`,
		"fallback": "ix:maintenance-triangle",
	});
}

export default Component;
