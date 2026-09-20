import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xwaxxj5nz.css';
import '../../css/t/ti4qee87p.css';
import '../../css/y/yt94fitzj.css';
import '../../css/m/m9a8mtnhb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="xwaxxj5nz"/><path clip-rule="evenodd" class="ti4qee87p"/><path class="yt94fitzj"/><path clip-rule="evenodd" class="m9a8mtnhb"/></g>`,
		"fallback": "streamline-flex-color:threat-usb-flat",
	});
}

export default Component;
