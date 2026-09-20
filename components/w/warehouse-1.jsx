import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvnqahb0g.css';
import '../../css/o/oarrbudtu.css';
import '../../css/d/dia6kyhkk.css';
import '../../css/d/dnt30bc-v.css';
import '../../css/b/b4mof2b8e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rvnqahb0g"><path class="oarrbudtu"/><path class="dia6kyhkk"/><path class="dnt30bc-v"/><path class="b4mof2b8e"/></g>`,
		"fallback": "streamline-plump:warehouse-1",
	});
}

export default Component;
