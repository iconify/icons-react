import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fciu8bblb.css';
import '../../css/b/b_act7pjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="fciu8bblb"/><path class="b_act7pjq"/></g>`,
		"fallback": "streamline-freehand:settings-wrench-double",
	});
}

export default Component;
