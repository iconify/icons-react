import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p4tanacyw.css';
import '../../css/w/w4ozpcbqb.css';
import '../../css/r/r05gn9bqo.css';
import '../../css/x/xb0x-zdrc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p4tanacyw"/><path clip-rule="evenodd" class="w4ozpcbqb"/><path class="r05gn9bqo"/><path clip-rule="evenodd" class="xb0x-zdrc"/></g>`,
		"fallback": "tdesign:lighting-circle",
	});
}

export default Component;
