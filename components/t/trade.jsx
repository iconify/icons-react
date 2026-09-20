import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/owchssbpb.css';
import '../../css/v/vcp1x-b-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="owchssbpb"/><path class="vcp1x-b-q"/></g>`,
		"fallback": "reicon:trade",
	});
}

export default Component;
