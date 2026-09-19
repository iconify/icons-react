import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dgz6obkql.css';
import '../../css/d/dj7q2sbav.css';
import '../../css/p/pme4-2byq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dgz6obkql"/><path clip-rule="evenodd" class="dj7q2sbav"/><path clip-rule="evenodd" class="pme4-2byq"/></g>`,
		"fallback": "healthicons:mental-disorders2x-outline",
	});
}

export default Component;
