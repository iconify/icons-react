import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/z/zyhn94bau.css';
import '../../css/b/btyk7mbvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="zyhn94bau"/><path class="btyk7mbvq"/></g>`,
		"fallback": "reicon:money-forbidden",
	});
}

export default Component;
