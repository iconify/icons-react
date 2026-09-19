import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/s/sz391hb6o.css';
import '../../css/j/jz5d8kipf.css';
import '../../css/g/g2ignvb-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="sz391hb6o"/><path class="jz5d8kipf"/><path class="g2ignvb-h"/></g>`,
		"fallback": "hugeicons:laughing",
	});
}

export default Component;
