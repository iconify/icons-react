import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/k/kzpcc0vow.css';
import '../../css/z/zizg4l5-q.css';
import '../../css/a/apxy6bb8a.css';
import '../../css/l/lx7g7ftfv.css';
import '../../css/f/f85w2xglb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="kzpcc0vow"/><path class="zizg4l5-q"/><path class="apxy6bb8a"/><path class="lx7g7ftfv"/><path class="f85w2xglb"/></g>`,
		"fallback": "matita:trophy",
	});
}

export default Component;
