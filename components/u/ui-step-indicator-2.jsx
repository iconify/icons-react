import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yonodp2-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yonodp2-p"/>`,
		"fallback": "streamline-freehand:ui-step-indicator-2",
	});
}

export default Component;
