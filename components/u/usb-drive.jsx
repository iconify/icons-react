import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tbocwr9ox.css';
import '../../css/a/a2y179_xr.css';
import '../../css/y/yqs0m0w8z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tbocwr9ox"/><path class="a2y179_xr"/><path class="yqs0m0w8z"/></g>`,
		"fallback": "streamline-color:usb-drive",
	});
}

export default Component;
