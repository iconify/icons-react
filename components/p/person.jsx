import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pypqy3lhq.css';
import '../../css/b/b_scd0bgx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pypqy3lhq"/><path clip-rule="evenodd" class="b_scd0bgx"/></g>`,
		"fallback": "healthicons:person",
	});
}

export default Component;
