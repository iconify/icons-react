import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/b/bsltwwbof.css';
import '../../css/k/kkztns4vk.css';
import '../../css/a/awrpmnbmi.css';
import '../../css/p/perttu9bq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="bsltwwbof"/><path class="kkztns4vk wm-shine"/><path class="awrpmnbmi wm-k"/><path class="perttu9bq wm-a"/></g>`,
		"fallback": "withicons-kawaii:receipt",
	});
}

export default Component;
