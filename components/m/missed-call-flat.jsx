import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xzmzhbcyq.css';
import '../../css/c/ceeym7siv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xzmzhbcyq"/><path clip-rule="evenodd" class="ceeym7siv"/></g>`,
		"fallback": "streamline-flex-color:missed-call-flat",
	});
}

export default Component;
