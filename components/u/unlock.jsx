import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/b/bto4dm6ke.css';
import '../../css/g/gickxzgav.css';
import '../../css/i/iltqaebrd.css';
import '../../css/l/ljxk-4bkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="bto4dm6ke"/><path class="gickxzgav"/><path class="iltqaebrd"/><path class="ljxk-4bkk"/></g>`,
		"fallback": "matita:unlock",
	});
}

export default Component;
