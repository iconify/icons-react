import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/aobv9abrs.css';
import '../../css/i/i6z9qfeqt.css';
import '../../css/g/g15hn7bsm.css';
import '../../css/x/xx79rlbwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="aobv9abrs wm-k"/><path class="i6z9qfeqt wm-a"/><path class="g15hn7bsm wm-s"/><path class="wm-s xx79rlbwp"/></g>`,
		"fallback": "withicons-bauhaus:jingle-bells",
	});
}

export default Component;
