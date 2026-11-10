import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/c/chzqssb9e.css';
import '../../css/e/e1_9hh9_j.css';
import '../../css/s/syb-_mbak.css';
import '../../css/u/ue7yybg0u.css';
import '../../css/v/v2lwypb9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="chzqssb9e"/><path class="e1_9hh9_j"/><path class="syb-_mbak"/><path class="ue7yybg0u"/><path class="v2lwypb9c"/></g>`,
		"fallback": "matita:order-food",
	});
}

export default Component;
