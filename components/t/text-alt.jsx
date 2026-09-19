import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fi-6_qg2a.css';
import '../../css/h/hl2jupb3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fi-6_qg2a"/><path class="hl2jupb3i"/></g>`,
		"fallback": "iconoir:text-alt",
	});
}

export default Component;
