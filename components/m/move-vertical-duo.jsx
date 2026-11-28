import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xogt69b4f.css';
import '../../css/z/zonae0b0d.css';
import '../../css/b/bae79bbrd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="xogt69b4f"/><path class="zonae0b0d"/><path class="bae79bbrd"/></g>`,
		"fallback": "iconaut:move-vertical-duo",
	});
}

export default Component;
