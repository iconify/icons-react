import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xucxz8tdy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xucxz8tdy"/>`,
		"fallback": "streamline-flex:new-folder",
	});
}

export default Component;
