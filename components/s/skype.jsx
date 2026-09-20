import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/o/o5q1bsw-x.css';
import '../../css/w/wkoo5ybqu.css';
import '../../css/a/aw1owfbgf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="o5q1bsw-x"/><path class="wkoo5ybqu"/><path class="aw1owfbgf"/></g>`,
		"fallback": "streamline-sharp-color:skype",
	});
}

export default Component;
