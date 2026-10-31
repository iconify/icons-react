import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/iwtpwnaqo.css';
import '../../css/g/g8ox3qbvv.css';
import '../../css/n/n5qtopl7b.css';
import '../../css/a/ai6b8n7rs.css';
import '../../css/w/w_4839bls.css';
import '../../css/v/v0eyaibau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="iwtpwnaqo wm-shadow"/><path class="g8ox3qbvv"/><path class="n5qtopl7b"/><path class="ai6b8n7rs"/><path class="w_4839bls"/><path class="v0eyaibau wm-s"/></g>`,
		"fallback": "withicons-retro:monitor-off",
	});
}

export default Component;
