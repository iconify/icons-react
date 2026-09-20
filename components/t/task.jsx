import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kdlr88zwz.css';
import '../../css/y/yw4531c1f.css';
import '../../css/p/py5qyfban.css';
import '../../css/p/ppy4v5tko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kdlr88zwz"/><path class="yw4531c1f"/><path class="py5qyfban"/><path class="ppy4v5tko"/></g>`,
		"fallback": "tdesign:task",
	});
}

export default Component;
