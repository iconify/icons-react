import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/u/uegmpib8n.css';
import '../../css/r/ry--o0ych.css';
import '../../css/k/kuw9g5b5o.css';
import '../../css/e/ekw201c_n.css';
import '../../css/f/f1-s3jb1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="uegmpib8n"/><path class="ry--o0ych"/><path class="kuw9g5b5o"/><path class="ekw201c_n"/><path class="f1-s3jb1o"/></g>`,
		"fallback": "matita:scan-line",
	});
}

export default Component;
