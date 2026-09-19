import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/a/aqapz463q.css';
import '../../css/c/cqtvnzb7g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="aqapz463q"/><path class="cqtvnzb7g"/></g>`,
		"fallback": "icon-park-solid:t-shirt",
	});
}

export default Component;
