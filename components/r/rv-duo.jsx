import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xbgdc1brd.css';
import '../../css/g/gikl4ubov.css';
import '../../css/z/zj5357btx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xbgdc1brd"/><path class="gikl4ubov"/><path class="zj5357btx"/></g>`,
		"fallback": "glyphs:rv-duo",
	});
}

export default Component;
