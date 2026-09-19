import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/v/v2d09-zvp.css';
import '../../css/w/w-mxnd3nu.css';
import '../../css/w/wx5q00nsv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="v2d09-zvp"/><path class="w-mxnd3nu"/><circle transform="rotate(-180 37.176 10)" class="wx5q00nsv"/></g>`,
		"fallback": "icon-park-solid:s-turn-right",
	});
}

export default Component;
