import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/z/zq3ckcczw.css';
import '../../css/e/e2c2kjyvc.css';
import '../../css/b/bcdwfe7nm.css';
import '../../css/a/a1hwy7v6h.css';
import '../../css/g/gdx9fpbyc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="zq3ckcczw"/><path class="e2c2kjyvc"/><path class="bcdwfe7nm"/><path class="a1hwy7v6h"/><path class="gdx9fpbyc"/></g>`,
		"fallback": "streamline-sharp-color:threat-usb",
	});
}

export default Component;
