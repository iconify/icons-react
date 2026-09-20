import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/f/fi4ekdsyx.css';
import '../../css/z/zh9ki6edl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="fi4ekdsyx"/><path class="zh9ki6edl"/></g>`,
		"fallback": "streamline-cyber:piano-3",
	});
}

export default Component;
