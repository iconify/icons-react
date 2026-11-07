import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/odo4tjbjr.css';
import '../../css/u/uyzd90bnt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="odo4tjbjr"/><path class="uyzd90bnt"/></g>`,
		"fallback": "solar:quote-broken",
	});
}

export default Component;
