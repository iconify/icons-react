import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bvr4vsbxi.css';
import '../../css/d/dltif5bou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="bvr4vsbxi"/><path class="dltif5bou"/></g>`,
		"fallback": "streamline-freehand:saving-bear-market",
	});
}

export default Component;
