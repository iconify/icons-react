import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gu5z-p6zh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gu5z-p6zh"/>`,
		"fallback": "streamline-flex:spiral-shape-solid",
	});
}

export default Component;
