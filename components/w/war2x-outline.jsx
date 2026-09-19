import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fthjhgb2v.css';
import '../../css/k/kjdjp6b_h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="fthjhgb2v"/><path class="kjdjp6b_h"/></g>`,
		"fallback": "healthicons:war2x-outline",
	});
}

export default Component;
