import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kqkf61b4u.css';
import '../../css/j/jntepjbop.css';
import '../../css/a/ah4cqtuiz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kqkf61b4u"/><path class="jntepjbop"/><path class="ah4cqtuiz"/></g>`,
		"fallback": "streamline-ultimate:speaker-1",
	});
}

export default Component;
