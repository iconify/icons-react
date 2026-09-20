import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d13zbfbdn.css';
import '../../css/x/xyyi6pxjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d13zbfbdn"/><path class="xyyi6pxjx"/>`,
		"fallback": "si:remove-from-library-fill",
	});
}

export default Component;
