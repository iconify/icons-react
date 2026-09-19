import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/guewfbcxi.css';
import '../../css/z/z9inlpfjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="guewfbcxi"/><path class="z9inlpfjq"/></g>`,
		"fallback": "iconoir:settings",
	});
}

export default Component;
