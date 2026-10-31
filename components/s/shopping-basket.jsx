import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/x5vvuyb7q.css';
import '../../css/c/couwgheta.css';
import '../../css/b/bqr77wbam.css';
import '../../css/f/fa8tk4jha.css';
import '../../css/e/e6bjfnb0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow x5vvuyb7q"/><path class="couwgheta"/><path class="bqr77wbam"/><path class="fa8tk4jha"/><path class="e6bjfnb0n"/></g>`,
		"fallback": "withicons-retro:shopping-basket",
	});
}

export default Component;
