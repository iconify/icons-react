import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dhoz0_dzf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dhoz0_dzf"/>`,
		"fallback": "streamline-freehand:upload-menu",
	});
}

export default Component;
