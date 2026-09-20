import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/p1f0ilx2o.css';
import '../../css/i/ixahytbiv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="p1f0ilx2o"/><path class="ixahytbiv"/></g>`,
		"fallback": "reicon:tag3",
	});
}

export default Component;
