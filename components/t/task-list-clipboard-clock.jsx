import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/a_ur4642b.css';
import '../../css/f/flbiw3q_a.css';
import '../../css/a/apevrpu8p.css';
import '../../css/k/k410pqbjk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="a_ur4642b"/><path class="flbiw3q_a"/><path class="apevrpu8p"/><path class="k410pqbjk"/></g>`,
		"fallback": "streamline-freehand:task-list-clipboard-clock",
	});
}

export default Component;
