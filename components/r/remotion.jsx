import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x17iilibs.css';
import '../../css/c/c3k235b9x.css';
import '../../css/l/ligjalpvc.css';
import '../../css/v/vj9qhvlqx.css';

const viewBox = {"width":250,"height":250};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="x17iilibs"><path class="c3k235b9x"/><path class="ligjalpvc"/><path class="vj9qhvlqx"/></g>`,
		"fallback": "thesvg-color:remotion",
	});
}

export default Component;
