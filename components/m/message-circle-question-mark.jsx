import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/j/j251p8b5o.css';
import '../../css/q/qoeybi7ug.css';
import '../../css/g/ga-6veb_o.css';
import '../../css/b/bdlwvybpz.css';
import '../../css/m/me2nruxae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="j251p8b5o"/><path class="qoeybi7ug"/><path class="ga-6veb_o"/><path class="bdlwvybpz"/><path class="me2nruxae"/></g>`,
		"fallback": "matita:message-circle-question-mark",
	});
}

export default Component;
