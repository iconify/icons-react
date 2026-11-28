import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/rv3y4wgmj.css';
import '../../css/q/qzw6n4bfu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="rv3y4wgmj"/><path class="qzw6n4bfu"/></g>`,
		"fallback": "iconaut:pine-tree",
	});
}

export default Component;
