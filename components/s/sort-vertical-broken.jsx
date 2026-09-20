import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wt1bt7bcg.css';
import '../../css/w/w-jwp9cbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wt1bt7bcg"/><path class="w-jwp9cbd"/></g>`,
		"fallback": "solar:sort-vertical-broken",
	});
}

export default Component;
