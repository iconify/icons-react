import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/raknlubrl.css';
import '../../css/s/s0terdbrq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="raknlubrl"/><path class="s0terdbrq"/></g>`,
		"fallback": "at-icons:racing-circuit",
	});
}

export default Component;
