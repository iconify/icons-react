import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/s/s13gb53ec.css';
import '../../css/v/v_tsadckf.css';
import '../../css/o/okceg-hhl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="s13gb53ec"/><path class="v_tsadckf"/><path class="okceg-hhl"/></g>`,
		"fallback": "matita:toast",
	});
}

export default Component;
