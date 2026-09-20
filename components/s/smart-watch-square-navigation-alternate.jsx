import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qy7kjeb-n.css';
import '../../css/s/soqhypbcv.css';
import '../../css/d/dzcxgfb6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qy7kjeb-n"/><path class="soqhypbcv"/><path class="dzcxgfb6o"/></g>`,
		"fallback": "streamline-freehand:smart-watch-square-navigation-alternate",
	});
}

export default Component;
