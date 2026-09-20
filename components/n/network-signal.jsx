import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nk75zlbao.css';
import '../../css/u/ukzn3sb-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="nk75zlbao"/><path class="ukzn3sb-t"/></g>`,
		"fallback": "streamline-ultimate:network-signal",
	});
}

export default Component;
