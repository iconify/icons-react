import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bpmks7bpo.css';
import '../../css/j/jkzswwnlp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bpmks7bpo"/><path class="jkzswwnlp"/></g>`,
		"fallback": "hugeicons:time-setting-02",
	});
}

export default Component;
