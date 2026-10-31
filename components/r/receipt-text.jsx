import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/s/sk08csc7i.css';
import '../../css/k/kkztns4vk.css';
import '../../css/a/awrpmnbmi.css';
import '../../css/w/w302-hd8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="sk08csc7i"/><path class="kkztns4vk wm-shine"/><path class="awrpmnbmi wm-k"/><path class="w302-hd8l wm-a"/></g>`,
		"fallback": "withicons-kawaii:receipt-text",
	});
}

export default Component;
