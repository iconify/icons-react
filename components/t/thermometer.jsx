import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qn6fo7tny.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qn6fo7tny"/>`,
		"fallback": "fontisto:thermometer",
	});
}

export default Component;
