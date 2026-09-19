import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/o/od54xeb9w.css';
import '../../css/v/v_6x56b4c.css';
import '../../css/h/hb1ntvjpb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="od54xeb9w"/><path class="v_6x56b4c"/><path class="hb1ntvjpb"/></g>`,
		"fallback": "icon-park-outline:ranking",
	});
}

export default Component;
