import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nzt4l3b4d.css';
import '../../css/n/nqa54_bef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="nzt4l3b4d"/><path class="nqa54_bef"/></g>`,
		"fallback": "streamline-ultimate:safety-float",
	});
}

export default Component;
