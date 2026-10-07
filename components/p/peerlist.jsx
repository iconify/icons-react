import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/q6ro8lsho.css';
import '../../css/t/t-1_7_-dd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="q6ro8lsho"/><path class="t-1_7_-dd"/></g>`,
		"fallback": "iconoir:peerlist",
	});
}

export default Component;
