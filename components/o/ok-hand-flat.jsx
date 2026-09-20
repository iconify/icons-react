import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y7k-jqbbe.css';
import '../../css/a/a440gn4za.css';
import '../../css/p/p6z24_dxu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y7k-jqbbe"/><path clip-rule="evenodd" class="a440gn4za"/><path clip-rule="evenodd" class="p6z24_dxu"/></g>`,
		"fallback": "streamline-color:ok-hand-flat",
	});
}

export default Component;
