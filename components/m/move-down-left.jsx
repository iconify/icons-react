import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ppsp0su1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ppsp0su1e"/>`,
		"fallback": "lucide:move-down-left",
	});
}

export default Component;
