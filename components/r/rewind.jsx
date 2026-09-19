import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/i/i1g5zgq6a.css';
import '../../css/v/vq5_c3q6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="i1g5zgq6a"/><path class="vq5_c3q6u"/></g>`,
		"fallback": "hugeicons:rewind",
	});
}

export default Component;
