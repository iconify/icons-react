import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qee8q7a_f.css';
import '../../css/n/n4tl19bdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qee8q7a_f"/><rect class="n4tl19bdw"/></g>`,
		"fallback": "struq:selection",
	});
}

export default Component;
