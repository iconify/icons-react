import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xq8pzkbkv.css';
import '../../css/u/upwuk-b6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xq8pzkbkv"/><path class="upwuk-b6g"/></g>`,
		"fallback": "iconoir:one-finger-select-hand-gesture",
	});
}

export default Component;
