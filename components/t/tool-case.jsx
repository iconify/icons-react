import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/ebdenr-ck.css';
import '../../css/f/f-rwydb1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ebdenr-ck"/><path class="f-rwydb1g"/></g>`,
		"fallback": "hugeicons:tool-case",
	});
}

export default Component;
