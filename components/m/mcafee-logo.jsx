import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/uufxf9bma.css';
import '../../css/p/p8amckbhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="uufxf9bma"/><path class="p8amckbhj"/></g>`,
		"fallback": "streamline-ultimate:mcafee-logo",
	});
}

export default Component;
