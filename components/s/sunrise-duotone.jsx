import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yp5j2ccqf.css';
import '../../css/j/ja77_8b3m.css';
import '../../css/i/icrs1w02v.css';
import '../../css/q/qywvln1_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="yp5j2ccqf"/><path class="ja77_8b3m"/><path class="icrs1w02v"/><path class="qywvln1_s"/></g>`,
		"fallback": "reicon:sunrise-duotone",
	});
}

export default Component;
