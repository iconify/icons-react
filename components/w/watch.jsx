import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mbwzttd-l.css';
import '../../css/o/odf1d5b7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mbwzttd-l"/><path class="odf1d5b7i"/></g>`,
		"fallback": "mynaui:watch",
	});
}

export default Component;
