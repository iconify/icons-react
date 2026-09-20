import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/z-3_bibib.css';
import '../../css/m/m1nsq7org.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="z-3_bibib"/><path class="m1nsq7org"/></g>`,
		"fallback": "reicon:message-add2",
	});
}

export default Component;
