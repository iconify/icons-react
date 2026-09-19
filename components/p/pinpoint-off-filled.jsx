import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cqm_rwbzx.css';
import '../../css/s/s-u7zmbom.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="cqm_rwbzx"/><path class="s-u7zmbom"/></g>`,
		"fallback": "pepicons:pinpoint-off-filled",
	});
}

export default Component;
