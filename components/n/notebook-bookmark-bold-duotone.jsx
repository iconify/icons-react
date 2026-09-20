import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wdk5m_t8f.css';
import '../../css/d/dtn1-2bvq.css';
import '../../css/p/p04pxjb3v.css';
import '../../css/j/jnh17ubuu.css';
import '../../css/i/ieg623b2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="wdk5m_t8f"/><path class="dtn1-2bvq"/><path class="p04pxjb3v"/><path class="jnh17ubuu"/><path class="ieg623b2u"/></g>`,
		"fallback": "solar:notebook-bookmark-bold-duotone",
	});
}

export default Component;
