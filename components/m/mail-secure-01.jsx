import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/t/tcrnivb-g.css';
import '../../css/w/wf9gwhbmc.css';
import '../../css/n/nbenvcaxy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="tcrnivb-g"/><path class="wf9gwhbmc"/><path class="nbenvcaxy"/></g>`,
		"fallback": "hugeicons:mail-secure-01",
	});
}

export default Component;
