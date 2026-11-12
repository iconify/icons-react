import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxvuarbsa.css';
import '../../css/y/yaky7tbun.css';
import '../../css/g/gj4t4ybgi.css';

const viewBox = {"width":1404,"height":1404};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxvuarbsa"/><path class="yaky7tbun"/><path class="gj4t4ybgi"/>`,
		"fallback": "thesvg-color:mudblazor",
	});
}

export default Component;
