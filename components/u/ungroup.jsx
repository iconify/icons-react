import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/w/whb2y76-d.css';
import '../../css/y/yn551zh7z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="whb2y76-d"/><path class="yn551zh7z"/></g>`,
		"fallback": "icon-park-outline:ungroup",
	});
}

export default Component;
