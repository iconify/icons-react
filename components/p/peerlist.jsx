import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/q6ro8lsho.css';
import '../../css/w/wn-y3m-7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="q6ro8lsho"/><path class="wn-y3m-7h"/></g>`,
		"fallback": "iconoir:peerlist",
	});
}

export default Component;
