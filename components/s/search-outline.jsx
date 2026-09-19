import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bs5ad85nx.css';
import '../../css/d/d6rwj94cj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bs5ad85nx"/><path class="d6rwj94cj"/>`,
		"fallback": "famicons:search-outline",
	});
}

export default Component;
