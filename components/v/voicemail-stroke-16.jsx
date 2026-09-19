import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/r/rlix6ub3a.css';
import '../../css/b/bteimacwg.css';
import '../../css/u/u6x4exbvo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="rlix6ub3a"/><circle class="bteimacwg"/><path class="u6x4exbvo"/></g>`,
		"fallback": "garden:voicemail-stroke-16",
	});
}

export default Component;
