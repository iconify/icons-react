import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/d/do_1vtxvr.css';
import '../../css/s/s3w23xbxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="do_1vtxvr"/><path class="s3w23xbxl"/></g>`,
		"fallback": "iconoir:text-box",
	});
}

export default Component;
