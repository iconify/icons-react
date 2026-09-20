import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/widsseezf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="widsseezf"/>`,
		"fallback": "streamline:interface-edit-brush-4-design-rubber-stamp-supplies-tool",
	});
}

export default Component;
