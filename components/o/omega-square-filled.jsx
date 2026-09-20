import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxitu-r0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dxitu-r0w"/>`,
		"fallback": "reicon:omega-square-filled",
	});
}

export default Component;
