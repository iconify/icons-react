import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bhnl5tocy.css';
import '../../css/n/nsw5-gahy.css';
import '../../css/x/xav8j7y3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bhnl5tocy"/><path clip-rule="evenodd" class="nsw5-gahy"/><path class="xav8j7y3j"/></g>`,
		"fallback": "healthicons:ventilator-24px",
	});
}

export default Component;
