import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/d/dz3knnbdr.css';
import '../../css/u/u3pa-zboc.css';
import '../../css/x/xsvqqibcb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="dz3knnbdr"/><path class="u3pa-zboc"/><ellipse class="xsvqqibcb"/></g>`,
		"fallback": "icon-park:magic-hat",
	});
}

export default Component;
