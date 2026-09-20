import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yidnahokj.css';
import '../../css/n/n3-afcbul.css';
import '../../css/m/m951a2blk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yidnahokj"/><path class="n3-afcbul"/><path class="m951a2blk"/></g>`,
		"fallback": "streamline-color:trophy",
	});
}

export default Component;
