import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/s/siqwysb_u.css';
import '../../css/i/ib54svqcv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="siqwysb_u"/><path class="ib54svqcv"/></g>`,
		"fallback": "matita:phi-capital",
	});
}

export default Component;
