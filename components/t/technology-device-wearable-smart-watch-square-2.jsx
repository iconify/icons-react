import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/ofw5tsb2a.css';
import '../../css/d/d2jm2ypzu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ofw5tsb2a"/><path class="d2jm2ypzu"/></g>`,
		"fallback": "streamline-ultimate:technology-device-wearable-smart-watch-square-2",
	});
}

export default Component;
