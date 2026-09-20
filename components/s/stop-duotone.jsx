import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gphuypb5m.css';
import '../../css/q/qc44_9bxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="gphuypb5m"/><path class="qc44_9bxu"/></g>`,
		"fallback": "reicon:stop-duotone",
	});
}

export default Component;
