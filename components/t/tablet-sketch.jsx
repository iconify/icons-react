import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mj7d6qdsu.css';
import '../../css/c/ctzae4bou.css';
import '../../css/b/b2gy1lb5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="mj7d6qdsu"/><path class="ctzae4bou wm-k"/><path class="b2gy1lb5d wm-a"/></g>`,
		"fallback": "withicons:tablet-sketch",
	});
}

export default Component;
