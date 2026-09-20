import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzpozeuvx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qzpozeuvx"/>`,
		"fallback": "streamline:interface-arrows-bottom-down-move-arrow-arrows",
	});
}

export default Component;
