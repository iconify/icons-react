import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/d/dubwj3k5m.css';
import '../../css/q/qdh3wslvu.css';
import '../../css/e/ellqoeb8k.css';
import '../../css/o/o_1dvsp6s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="dubwj3k5m"/><path class="qdh3wslvu"/><path clip-rule="evenodd" class="ellqoeb8k"/><path class="o_1dvsp6s"/></g>`,
		"fallback": "icon-park-outline:music-menu",
	});
}

export default Component;
