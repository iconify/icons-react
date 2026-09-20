import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qq88whb_y.css';
import '../../css/t/t1sbt3qqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="qq88whb_y"/><path class="t1sbt3qqp"/></g>`,
		"fallback": "reicon:mute-filled",
	});
}

export default Component;
