import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/r/r01_y1l6s.css';
import '../../css/s/srynasjdu.css';
import '../../css/t/tgu0b0qac.css';
import '../../css/s/sw1ouqb9w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="r01_y1l6s"/><path clip-rule="evenodd" class="srynasjdu"/><path class="tgu0b0qac"/><path class="sw1ouqb9w"/></g>`,
		"fallback": "icon-park-outline:poker",
	});
}

export default Component;
