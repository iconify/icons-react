import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/j7iivuttr.css';
import '../../css/f/fk85oxbeq.css';
import '../../css/a/a208tmlfu.css';
import '../../css/q/qii_a-bms.css';
import '../../css/h/hsr5n8xpb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="j7iivuttr wm-shadow"/><path class="fk85oxbeq"/><path class="a208tmlfu"/><path class="qii_a-bms"/><path class="hsr5n8xpb"/></g>`,
		"fallback": "withicons-retro:share-2",
	});
}

export default Component;
