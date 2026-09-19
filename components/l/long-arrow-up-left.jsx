import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vv638qbws.css';
import '../../css/y/yak7gdbvk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vv638qbws"/><path class="yak7gdbvk"/></g>`,
		"fallback": "iconoir:long-arrow-up-left",
	});
}

export default Component;
