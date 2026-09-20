import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bs9ntgcgn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bs9ntgcgn"/>`,
		"fallback": "streamline-freehand:select-target-crosshair-1",
	});
}

export default Component;
