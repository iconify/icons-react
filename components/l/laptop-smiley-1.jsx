import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/oaxgmwbwd.css';
import '../../css/p/p2q7ubcid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="oaxgmwbwd"/><path class="p2q7ubcid"/></g>`,
		"fallback": "streamline-ultimate:laptop-smiley-1",
	});
}

export default Component;
