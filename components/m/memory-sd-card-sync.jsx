import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/l-emcpb2w.css';
import '../../css/w/wxfiv0ytx.css';
import '../../css/l/lelt0sbvz.css';
import '../../css/w/w5z-ygk9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="l-emcpb2w"/><path class="wxfiv0ytx"/><path class="lelt0sbvz"/><path class="w5z-ygk9y"/></g>`,
		"fallback": "streamline-freehand-color:memory-sd-card-sync",
	});
}

export default Component;
