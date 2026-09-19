import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qlqvnbbwd.css';
import '../../css/r/r1hiolq4o.css';
import '../../css/q/q7rjtwb8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="qlqvnbbwd"/><path class="r1hiolq4o"/><path clip-rule="evenodd" class="q7rjtwb8f"/></g>`,
		"fallback": "healthicons:integrated-data-and-research-outline-24px",
	});
}

export default Component;
