import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmz4urbxf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmz4urbxf"/>`,
		"fallback": "streamline-flex:layout-window-1",
	});
}

export default Component;
