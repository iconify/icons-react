import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/w-fofisai.css';
import '../../css/f/f-xi9xbup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="w-fofisai"/><path class="f-xi9xbup"/></g>`,
		"fallback": "streamline-ultimate:laptop-download",
	});
}

export default Component;
