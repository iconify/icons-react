import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/w5iz7gb4x.css';
import '../../css/x/xzdhr5hjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="w5iz7gb4x"/><path class="xzdhr5hjs"/></g>`,
		"fallback": "hugeicons:money-saving-jar",
	});
}

export default Component;
