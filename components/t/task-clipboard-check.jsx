import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/q6w25xhkj.css';
import '../../css/n/nl1byab7m.css';
import '../../css/n/n_2diu23e.css';
import '../../css/r/ruam3sbry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="q6w25xhkj"/><path class="nl1byab7m"/><path class="n_2diu23e"/><path class="ruam3sbry"/></g>`,
		"fallback": "streamline-freehand:task-clipboard-check",
	});
}

export default Component;
