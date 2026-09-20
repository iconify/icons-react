import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/l/lqbe0_bqt.css';
import '../../css/t/t6on5ebga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="lqbe0_bqt"/><path class="t6on5ebga"/></g>`,
		"fallback": "streamline-sharp-color:star-2",
	});
}

export default Component;
