import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/q5kge4yah.css';
import '../../css/j/j70uabc0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="q5kge4yah"/><path class="j70uabc0e"/></g>`,
		"fallback": "hugeicons:toilet-02",
	});
}

export default Component;
