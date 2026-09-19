import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/q/qohfgdb0o.css';
import '../../css/j/jseg8life.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="qohfgdb0o"/><path class="jseg8life"/></g>`,
		"fallback": "hugeicons:live-streaming-03",
	});
}

export default Component;
