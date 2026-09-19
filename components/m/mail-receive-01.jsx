import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/b/bkgsdzb8x.css';
import '../../css/i/iuvgjdbsi.css';
import '../../css/j/jfdr82bgl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="bkgsdzb8x"/><path class="iuvgjdbsi"/><path class="jfdr82bgl"/></g>`,
		"fallback": "hugeicons:mail-receive-01",
	});
}

export default Component;
