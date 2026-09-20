import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dg5ykdbtd.css';
import '../../css/u/uj6ju-bjn.css';
import '../../css/j/jz1nelbbb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dg5ykdbtd"/><path class="uj6ju-bjn"/><path class="jz1nelbbb"/></g>`,
		"fallback": "streamline-ultimate:network-browser",
	});
}

export default Component;
