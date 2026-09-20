import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l1txewubx.css';
import '../../css/z/zfhb2p2xr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l1txewubx"/><path class="zfhb2p2xr"/></g>`,
		"fallback": "streamline-color:paint-bucket-flat",
	});
}

export default Component;
