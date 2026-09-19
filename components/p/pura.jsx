import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/ekg45ebwf.css';
import '../../css/q/q9o3v-bsr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="ekg45ebwf"/><path class="q9o3v-bsr"/></g>`,
		"fallback": "cryptocurrency-color:pura",
	});
}

export default Component;
