import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvnqahb0g.css';
import '../../css/l/l5yjw9b8s.css';
import '../../css/c/cjq8jdb5j.css';
import '../../css/u/u6fiysb2t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rvnqahb0g"><path class="l5yjw9b8s"/><path class="cjq8jdb5j"/><path class="u6fiysb2t"/></g>`,
		"fallback": "streamline-plump:smiley-drool",
	});
}

export default Component;
