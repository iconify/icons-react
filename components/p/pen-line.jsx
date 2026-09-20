import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ic-fwe_yt.css';
import '../../css/d/dqelkqb7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ic-fwe_yt"/><path class="dqelkqb7t"/></g>`,
		"fallback": "reicon:pen-line",
	});
}

export default Component;
