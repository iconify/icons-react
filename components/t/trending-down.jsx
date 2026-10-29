import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/cjqmx4fpw.css';
import '../../css/t/tv2-46qgh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="cjqmx4fpw"/><path class="tv2-46qgh wm-a"/></g>`,
		"fallback": "withicons:trending-down",
	});
}

export default Component;
