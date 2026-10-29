import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zfu1m_b5p.css';
import '../../css/l/l4t549b2p.css';
import '../../css/k/kqx6pqw0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="zfu1m_b5p"/><path class="l4t549b2p wm-a"/><path class="kqx6pqw0w wm-s"/></g>`,
		"fallback": "withicons:mouse-pointer-click-solid",
	});
}

export default Component;
