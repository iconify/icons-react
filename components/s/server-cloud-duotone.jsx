import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jjs64fbrx.css';
import '../../css/q/q1yocybne.css';
import '../../css/o/o3lva51sv.css';
import '../../css/d/dab4yko7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jjs64fbrx"/><path clip-rule="evenodd" class="q1yocybne"/><path class="o3lva51sv"/><path clip-rule="evenodd" class="dab4yko7u"/></g>`,
		"fallback": "reicon:server-cloud-duotone",
	});
}

export default Component;
