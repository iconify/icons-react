import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/csms1mbgn.css';
import '../../css/q/qskborxvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="csms1mbgn"/><path class="qskborxvp"/></g>`,
		"fallback": "reicon:pill-duotone",
	});
}

export default Component;
