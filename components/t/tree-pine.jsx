import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/uyr_nvbxr.css';
import '../../css/r/rlafu7tfd.css';
import '../../css/q/qiwyx_bry.css';
import '../../css/x/xdrv52mgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="uyr_nvbxr wm-shadow"/><path class="rlafu7tfd wm-shadow"/><path class="qiwyx_bry"/><path class="xdrv52mgw"/></g>`,
		"fallback": "withicons-brutal:tree-pine",
	});
}

export default Component;
