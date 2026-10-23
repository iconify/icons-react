import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/s/s43qqvbvc.css';
import '../../css/e/egcezsegq.css';
import '../../css/j/j_hcuie1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="s43qqvbvc"/><path class="egcezsegq"/><path class="j_hcuie1x"/></g>`,
		"fallback": "matita:leaf",
	});
}

export default Component;
