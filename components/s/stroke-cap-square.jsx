import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y4yt5jxac.css';
import '../../css/r/rapwtibdy.css';
import '../../css/g/gmnui7bgf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="y4yt5jxac"/><path class="rapwtibdy"/><path class="gmnui7bgf"/></g>`,
		"fallback": "andrsrxn:stroke-cap-square",
	});
}

export default Component;
