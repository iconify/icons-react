import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jma8gtb2a.css';
import '../../css/d/dyju72esb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jma8gtb2a"/><path class="dyju72esb"/></g>`,
		"fallback": "streamline-ultimate:phone-action-location",
	});
}

export default Component;
