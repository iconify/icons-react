import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdxdnnbby.css';
import '../../css/f/f2pd8-plm.css';
import '../../css/p/py8aoxreo.css';
import '../../css/x/xdpdo-1yn.css';

const viewBox = {"width":1051.6,"height":254.7,"left":471,"top":-72.7};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qdxdnnbby"><path class="f2pd8-plm"/><path class="py8aoxreo"/><path class="xdpdo-1yn"/></g>`,
		"fallback": "thesvg-color:taboola",
	});
}

export default Component;
